import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../Services/layout.service'
import { EmployeeService } from '../employee.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EmployeePermissions } from 'src/app/Entities/EmployeePermissions';
import { RoleElement } from 'src/app/Entities/EmployeeRoleElement';
import { ElementOperation } from 'src/app/Entities/ElementOperation';

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
  constructor(private layoutService: LayoutService, private employeeService: EmployeeService, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.employeeService.getElements()
      .subscribe((res) => {
        if (res.errorCode == 0) {
          this.ElementsData = res.dataObj;
          this.employeeService.getOperations().subscribe((res2) => {
            if (res2.errorCode == 0) {
              this.OperationsData = res2.dataObj;
    console.log("Test")

    console.log(this.Operations)
    console.log(this.Elements)

              this.InitializeForm();
              console.log(this.EmployeeForm.value);
            };
          });
        }
      });
  }


  InitializeForm = function () {
    this.EmployeeForm = this.fb.group({
      designationId: ['', Validators.required],
      departmentId: ['', Validators.required],
      employeeFname: ['', Validators.required],
      employeeMname: ['', Validators.required],
      employeeEmail: ['', [Validators.required, Validators.email]],
      employeePassword: ['', Validators.required],
      employeeMobileNo: ['', Validators.required],
      employeeProfileImg: [''],
      employeeId: ['', Validators.required],
      gender: ['Male', Validators.required],
      employeeElementMappingList: this.Elements
    })
    this.employeeService.GetDepartments().subscribe((res) => {
      this.DepartmentList = res.dataObj;
      console.log(this.DepartmentList);
    });
  }

  get Elements(): FormArray {
    var elementsArray = this.fb.array([]);
    this.ElementsData.forEach(element => {
      elementsArray.push(this.fb.group({
        elementId: [element.elementId],
        elementName: [element.elementName],
        employeeElementOperationList: this.Operations
      }))
    })
    return elementsArray;
  }

  get Operations(): FormArray {
    var operationsArray = this.fb.array([]);
    this.OperationsData.forEach(element => {
      operationsArray.push(this.fb.group({
        operationId: [element.operationId],
        operationName: [element.operationName],
        value: [false],
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
        this.EmployeeForm.reset();
        this.EmployeeForm.patchValue({
          gender: 'Male'
        });
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    },(err)=>{
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
    Empobj.employeeId = data.employeeId;
    Empobj.gender = data.gender;
    Empobj.employeeElementMappingList = [];

    data.employeeElementMappingList.forEach(elementdata => {
      var element = new RoleElement();
      element.elementId = elementdata.elementId;
      element.employeeElementOperationList = [];
      elementdata.employeeElementOperationList.forEach(operationData => {
        if (operationData.value == true) {
          var opertaion = new ElementOperation();
          opertaion.operationId = operationData.operationId;
          element.employeeElementOperationList.push(opertaion);
        }
      });
      Empobj.employeeElementMappingList.push(element);
    });
    return Empobj;
  }

  RadioButtonClick = function (data) {
    this.EmployeeForm.patchValue({
      gender: data
    })
  }


}
