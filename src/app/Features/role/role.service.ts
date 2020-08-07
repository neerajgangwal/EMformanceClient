import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'

@Injectable()
export class RoleService {

  constructor(private httpClient:HttpClient) { }

  addRole=function(data)
  {
    return this.httpClient.post(environment.url+environment.CreateRole,data);
  }

  getOperations=function()
  {
    return this.httpClient.get(environment.url+environment.getOperations);
  }

  getElements=function()
  {
    return this.httpClient.get(environment.url+environment.getElements);
  }

  GetDepartments=function()
  {
    return this.httpClient.get(environment.url+environment.getDepartment);
  }

  GetDesignations=function()
  {
    return this.httpClient.post(environment.url+environment.GetDesignations,{});
  }

  deleteDesignation=function(id)
  {
    return this.httpClient.post(environment.url+environment.deleteRole,{designationId:id})
  }
  GetDesignationById=function(id)
  {
    return this.httpClient.post(environment.url+environment.GetDesignations,{designationId:id});
  }

  GetDesignationElementsById=function(id)
  {
    return this.httpClient.get(environment.url+environment.getDesignationElementMapping+id);
  }

  UpdateDesignation=function(data)
  {
    return this.httpClient.post(environment.url+environment.updateDesignation,data);
  }
}
