import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { LayoutService } from '../../../Services/layout.service';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RolePermissions } from '../../../../app/Entities/RolePermissions';
import { ElementOperation } from '../../../../app/Entities/ElementOperation';
import { RoleElement } from '../../../../app/Entities/RoleElement';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  OperationsData: any[];
  ElementsData: any[];
  DepartmentList: any[];
  RolePermissions: RoleElement[] = [];
  constructor(private roleService: RoleService, private layoutService: LayoutService, private fb: FormBuilder, private route: ActivatedRoute, private messageService: MessageService, private router: Router) { }
  RoleForm: FormGroup;
  RoleData;
  PermissionsData: Map<number, number[]>
  RoleList:any[]=[{"designationName":"CEO"},
  {"designationName":"CTO"},
  {"designationName":"COO"},
  {"designationName":"CFO"},
  {"designationName":"President"},
  {"designationName":"VP"},
  {"designationName":"Talent Acquisition Head"},
  {"designationName":"HR Manager"},
  {"designationName":"HR executive"},
  {"designationName":"HR Trainer"},
  {"designationName":"Project Manager"},
  {"designationName":"Team Head"},
  {"designationName":"UI/UX Developer"},
  {"designationName":"UI/UX Designer"},
  {"designationName":"Developer"},
  {"designationName":"QA Engineer"}];
  FilteredRoleList:any[];
  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {
      var id = params.get("id");
      this.roleService.GetDesignationById(id).subscribe((res) => {
        console.log(res);
        this.RoleData = res.dataObj[0];
        this.roleService.GetDesignationElementsById(id).subscribe((res) => {
          this.CreateHashMap(res.dataObj.designationElementMappingList);
          this.RolePermissions = res.dataObj.designationElementMappingList;
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
        });
      });
    });
  }

  InitializeForm = function () {
    this.RoleForm = this.fb.group({
      designationName: [this.RoleData.designationName, Validators.required],
      departmentId: [this.RoleData.departmentId, Validators.required],
      designationId: [this.RoleData.designationId, Validators.required],
      parentDesignationId: [0],
      designationLevelNo: [0],
      designationElementMappingList: this.Elements
    });
  }

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
    var list = this.PermissionsData.get(elementId);
    if (list) {
      if (list.indexOf(operationId) > -1) {
        return true;
      };
    }
    return false;
  }

  get Elements(): FormArray {
    var elementsArray = this.fb.array([]);
    this.ElementsData.forEach(element => {
      elementsArray.push(this.fb.group({
        elementId: [element.elementId],
        elementName: [element.elementName],
        roleElementOprationList: this.Operations(element.elementId)
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
    return this.RoleForm.get('designationElementMappingList') as FormArray;
  }

  ElementOperationsList(elementIndex) {
    return this.ElementsList.controls[elementIndex].get('roleElementOprationList') as FormArray;
  }

  ResetForm = function () {
    this.RoleForm.reset();
    this.InitializeForm();

  }

  UpdateRole(data) {
    var Roleobj = new RolePermissions();
    Roleobj.departmentId = data.departmentId;
    Roleobj.designationId = data.designationId;
    Roleobj.designationName = data.designationName;
    Roleobj.parentDesignationId = data.parentDesignationId;
    Roleobj.designationLevelNo = data.designationLevelNo;
    Roleobj.designationElementMappingList = [];
    data.designationElementMappingList.forEach(elementdata => {
      var element = new RoleElement();
      element.elementId = elementdata.elementId;
      element.roleElementOprationList = [];
      elementdata.roleElementOprationList.forEach(operationData => {
        if (operationData.value == true) {
          var opertaion = new ElementOperation();
          opertaion.operationId = operationData.operationId;
          element.roleElementOprationList.push(opertaion);
        }
      });
      Roleobj.designationElementMappingList.push(element);
    });

    this.roleService.UpdateDesignation(Roleobj).subscribe((res) => {
      if (res.errorCode == 0) {
        this.messageService.add({ severity: 'success', summary: 'Role Updated successfully', detail: '' });
        this.router.navigate(['role', 'list']);
        this.ResetForm()
      }
      else {
        this.messageService.add({ severity: 'error', summary: res.errorMsg, detail: '' });
      }
    }, (error) => {
      console.log(error);
      this.messageService.add({ severity: 'error', summary: "Error with the api , please try again" });
    });
    console.log(Roleobj);
  }

  FilterRoles(event) {
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.RoleList.length; i++) {
        let role = this.RoleList[i];
        if (role.designationName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(role.designationName);
        }
    }

    this.FilteredRoleList = filtered;
}

}
