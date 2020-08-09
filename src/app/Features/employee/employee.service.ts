import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { UserService } from 'src/app/Services/user.service';
@Injectable()
export class EmployeeService {

  constructor(private httpClient:HttpClient,private userService:UserService) { }
  
  GetEmployeeData=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.employeeData);
  }

  GetEmployeeById=function(id){
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.getEmployeeData,{employeeId:id});
  }

  GetDepartments=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getDepartment);
  }

  GetDepartment=function(id)
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getDepartmentById+id);
  }

  GetDesignation=function(id)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.GetDesignations,{designationId:id});
  }

  GetRolesForDepartmentId=function(id)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.GetDesignations,{departmentId:id});
  }

  CreateEmployee=function(data)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.AddEmployee,data);
  }

  UpdateEmployee=function(data)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.updateEmployee,data);
  }
  getOperations=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getOperations);
  }

  getElements=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getElements);
  }

  getRolePermissions=function(id)
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getDesignationElementMapping+id);
  }

  deleteEmployee=function(id)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.deleteEmployee,{employeeId:id})
  }

  getEmployeeElementMapping=function(id)
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getEmployeeElementsMapping+id);
  }
}
