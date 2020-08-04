import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment'

@Injectable()
export class DepartmentService {

  constructor(private httpClient:HttpClient ) { }

  addDepartment=function(data)
  {
    return this.httpClient.post(environment.url+environment.CreateDepartment,data);
  }
  
  getDepartment=function()
  {
    console.log("Loading/........")
    return this.httpClient.get(environment.url+environment.getDepartment);
  }
  
  deleteDepartment=function(id)
  {
    return this.httpClient.post(environment.url+environment.deleteDepartment,{departmentId:id});
  }
}
