import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Injectable()
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  
  GetEmployeeData=function()
  {
    return this.httpClient.get(environment.url+environment.employeeData);
  }

  GetDepartments=function()
  {
    return this.httpClient.get(environment.url+environment.getDepartment);
  }

  GetRolesForDepartmentId=function(id)
  {
    return this.httpClient.post(environment.url+environment.GetDesignations,{departmentId:id});
  }

  CreateEmployee=function(data)
  {
    return this.httpClient.post(environment.url+environment.AddEmployee,data);
  }
}
