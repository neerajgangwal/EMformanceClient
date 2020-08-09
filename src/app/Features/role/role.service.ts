import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import { UserService } from 'src/app/Services/user.service';

@Injectable()
export class RoleService {

  constructor(private httpClient:HttpClient,private userService:UserService) { }

  addRole=function(data)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.CreateRole,data);
  }

  getOperations=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getOperations);
  }

  getElements=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getElements);
  }

  GetDepartments=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getDepartment);
  }

  GetDesignations=function()
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.GetDesignations,{});
  }

  deleteDesignation=function(id)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.deleteRole,{designationId:id})
  }
  GetDesignationById=function(id)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.GetDesignations,{designationId:id});
  }

  GetDesignationElementsById=function(id)
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getDesignationElementMapping+id);
  }

  UpdateDesignation=function(data)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.updateDesignation,data);
  }
}
