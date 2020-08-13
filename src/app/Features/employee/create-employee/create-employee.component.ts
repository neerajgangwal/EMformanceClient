import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../Services/layout.service'
import { EmployeeService } from '../employee.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EmployeePermissions } from 'src/app/Entities/EmployeePermissions';
import { EmployeeRoleElement } from 'src/app/Entities/EmployeeRoleElement';
import { ElementOperation } from 'src/app/Entities/ElementOperation';
import { RolePermissions } from 'src/app/Entities/RolePermissions';
import { RoleElement } from 'src/app/Entities/RoleElement';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  EmployeeForm: FormGroup
  DepartmentList: any[];
  DesignationList: any[];
  OperationsData: any[];
  ElementsData: any[];
  RolePermissions: RoleElement[] = [];
  PermissionsData: Map<number, number[]>

  constructor(private layoutService: LayoutService, private employeeService: EmployeeService, private fb: FormBuilder,
    private messageService: MessageService,
    private userService: UserService
  ) { }

  CreateHashMap(data) {
    this.PermissionsData = new Map<number, number[]>();
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      var operations = [];
      for (let index2 = 0; index2 < element.roleElementOprationList.length; index2++) {
        const operation = element.roleElementOprationList[index2];
        operations.push(operation.operationId);
      }
      this.PermissionsData.set(element.elementId, operations);
    }
  }

  CheckPermission(elementId, operationId) {
    if (this.PermissionsData) {
      var list = this.PermissionsData.get(elementId);
      if (list) {
        if (list.indexOf(operationId) > -1) {
          return true;
        };
      }
    }
    return false;
  }


  ngOnInit() {
    this.employeeService.getElements()
      .subscribe((res) => {
        if (res.errorCode == 0) {
          this.ElementsData = res.dataObj;
          this.employeeService.getOperations().subscribe((res2) => {
            if (res2.errorCode == 0) {
              this.OperationsData = res2.dataObj;
              this.InitializeForm();
              console.log(this.EmployeeForm.value);
            };
          });
        }
      });
  }


  InitializeForm = function () {
    if (this.EmployeeForm) {
      var employee = this.EmployeeForm.value;
      this.EmployeeForm = this.fb.group({
        designationId: [employee.designationId, Validators.required],
        departmentId: [employee.departmentId, Validators.required],
        employeeFname: [employee.employeeFname, Validators.required],
        employeeMname: [employee.employeeMname, Validators.required],
        employeeEmail: [employee.employeeEmail, [Validators.required, Validators.email]],
        employeePassword: [employee.employeePassword, Validators.required],
        employeeMobileNo: [employee.employeeMobileNo, Validators.required],
        employeeProfileImg: [employee.employeeProfileImg],
        employeeUserId: [employee.employeeUserId, Validators.required],
        gender: [employee.gender, Validators.required],
        employeeElementMappingList: this.Elements
      });
    }
    else {
      this.EmployeeForm = this.fb.group({
        designationId: ['', Validators.required],
        departmentId: ['', Validators.required],
        employeeFname: ['', Validators.required],
        employeeMname: ['', Validators.required],
        employeeEmail: ['', [Validators.required, Validators.email]],
        employeePassword: ['', Validators.required],
        employeeMobileNo: ['', Validators.required],
        employeeProfileImg: [''],
        employeeUserId: ['', Validators.required],
        gender: ['Male', Validators.required],
        employeeElementMappingList: this.Elements
      });
    }

    this.employeeService.GetDepartments().subscribe((res) => {
      this.DepartmentList = res.dataObj;
      console.log(this.DepartmentList);
    });
  }


  SelectRoleChanged(id) {
    this.employeeService.getRolePermissions(id).subscribe(res => {
      this.CreateHashMap(res.dataObj.designationElementMappingList);
      console.log(id);
      this.InitializeForm();
    });
  }




  get Elements(): FormArray {
    var elementsArray = this.fb.array([]);
    this.ElementsData.forEach(element => {
      elementsArray.push(this.fb.group({
        elementId: [element.elementId],
        elementName: [element.elementName],
        employeeElementOperationList: this.Operations(element.elementId)
      }))
    })
    return elementsArray;
  }

  Operations(elementId): FormArray {
    var operationsArray = this.fb.array([]);
    this.OperationsData.forEach(element => {
      operationsArray.push(this.fb.group({
        operationId: [element.operationId],
        operationName: [element.operationName],
        value: [this.CheckPermission(elementId, element.operationId)],
      }))
    });
    return operationsArray;
  };

  get ElementsList() {
    return this.EmployeeForm.get('employeeElementMappingList') as FormArray;
  }

  ElementOperationsList(elementIndex) {
    return this.ElementsList.controls[elementIndex].get('employeeElementOperationList') as FormArray;
  }


  SelectDepartmentChanged = function (id) {
    this.employeeService.GetRolesForDepartmentId(id).subscribe((res) => {
      this.EmployeeForm.patchValue({
        designationId: ''
      });
      this.DesignationList = res.dataObj;
      console.log(this.DesignationList);
    });
  }

  CreateEmployee = function (data) {
    console.log("TestData");
    console.log(data);
    var convertedData = this.MapDataToEntity(data);
    this.employeeService.CreateEmployee(convertedData).subscribe((res) => {
      console.log(res);
      if (res.errorCode == 0) {
        console.log("success");
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully created employee' });
        this.resetForm();
        this.EmployeeForm.patchValue({
          gender: 'Male'
        });
        var signupData = {
          userRole: "NON-ADMIN",
          companyInfo: this.userService.LoggedInUser.CompanyInfo,
          name: data.employeeFname,
          password: data.employeePassword,
          email: data.employeeEmail
        }
        this.employeeService.CreateSignUp(signupData).subscribe((res2) => {
          if (res2.errorCode == 0) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Successfully created employee signup' });
          }
        })

      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }, (err) => {
      console.log(err);
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Failed , please try again" });
    })
  }

  MapDataToEntity = function (data) {
    var Empobj = new EmployeePermissions();
    Empobj.designationId = data.designationId;
    Empobj.departmentId = data.departmentId;
    Empobj.employeeFname = data.employeeFname;
    Empobj.employeeMname = data.employeeMname;
    Empobj.employeeEmail = data.employeeEmail;
    Empobj.employeeMobileNo = data.employeeMobileNo;
    Empobj.employeePassword = data.employeePassword;
    Empobj.employeeProfileImg = data.employeeProfileImg;
    Empobj.employeeCode = data.employeeId;
    Empobj.gender = data.gender;
    Empobj.employeeElementMappingList = [];

    data.employeeElementMappingList.forEach(elementdata => {
      var element = new EmployeeRoleElement();
      element.elementId = elementdata.elementId;
      element.employeeElementOprationList = [];
      elementdata.employeeElementOperationList.forEach(operationData => {
        if (operationData.value == true) {
          var opertaion = new ElementOperation();
          opertaion.operationId = operationData.operationId;
          element.employeeElementOprationList.push(opertaion);
        }
      });
      Empobj.employeeElementMappingList.push(element);
    });
    return Empobj;
  }

  resetForm = function () {
    this.EmployeeForm.reset();
    this.PermissionsData = null;
    this.InitializeForm();
  }
  RadioButtonClick = function (data) {
    this.EmployeeForm.patchValue({
      gender: data
    })
  }

}
