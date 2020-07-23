import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { LayoutService } from '../../../Services/layout.service';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FullCalendar } from 'primeng';
import { RolePermissions } from '../../../../app/Entities/RolePermissions';
import { ElementOperation } from '../../../../app/Entities/ElementOperation';
import { RoleElement } from '../../../../app/Entities/RoleElement';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
  OperationsData: any[]; 
  ElementsData: any[];
  DepartmentList: any[];
  constructor(private roleService: RoleService, private layoutService: LayoutService, private fb: FormBuilder,private messageService: MessageService) { }
  RoleForm: FormGroup;
  ngOnInit(): void {
    this.layoutService.UpdateLayout(true, true, true, false);
    this.roleService.GetDepartments().subscribe((res) => {
      this.DepartmentList = res.dataObj;
      console.log(this.DepartmentList);

      this.roleService.getElements()
        .subscribe((res) => {
          if (res.errorCode == 0) {
            this.ElementsData = res.dataObj;
            this.roleService.getOperations().subscribe((res2) => {
              if (res2.errorCode == 0) {
                this.OperationsData = res2.dataObj;
                this.InitializeForm();
                console.log(this.RoleForm.value);
              };
            });
          }
        });
    });
  }

  InitializeForm = function () {
    this.RoleForm = this.fb.group({
      designationName: ['', Validators.required],
      departmentId: ['', Validators.required],
      parentDesignationId: [0],
      designationLevelNo: [0],
      designationElementMappingList: this.Elements
    });
  }

  get Elements(): FormArray {
    var elementsArray = this.fb.array([]);
    this.ElementsData.forEach(element => {
      elementsArray.push(this.fb.group({
        elementId: [element.elementId],
        elementName: [element.elementName],
        roleElementOprationList: this.Operations
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
    return this.RoleForm.get('designationElementMappingList') as FormArray;
  }

  ElementOperationsList(elementIndex) {
    return this.ElementsList.controls[elementIndex].get('roleElementOprationList') as FormArray;
  }

  ResetForm=function()
  {
    this.RoleForm.reset();
    this.InitializeForm();

  }

  CreateRole(data) {
    var Roleobj = new RolePermissions();
    Roleobj.departmentId = data.departmentId;
    Roleobj.designationName = data.designationName;
    Roleobj.parentDesignationId = data.parentDesignationId;
    Roleobj.designationLevelNo = data.designationLevelNo;
    Roleobj.designationElementMappingList = [];
    data.designationElementMappingList.forEach(elementdata => {
      var element = new RoleElement();
      element.elementId = elementdata.elementId;
      element.roleElementOperationList = [];
      elementdata.roleElementOprationList.forEach(operationData => {
        if (operationData.value == true) {
          var opertaion = new ElementOperation();
          opertaion.operationId = operationData.operationId;
          element.roleElementOperationList.push(opertaion);
        }
      });
      Roleobj.designationElementMappingList.push(element);
    });

    this.roleService.addRole(Roleobj).subscribe((res) => {
      if(res.errorCode==0)
      {
        this.messageService.add({ severity: 'success', summary: 'Role created successfully', detail: '' });
        this.ResetForm()
      }
      else{
        this.messageService.add({ severity: 'error', summary: res.errorMsg, detail: '' });
      }
    },(error)=>{
      console.log(error);
      this.messageService.add({severity:'error',summary:"Error with the api , please try again"});
    });
    console.log(Roleobj);
  }
}
