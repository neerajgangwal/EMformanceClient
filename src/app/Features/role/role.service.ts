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
  
}
