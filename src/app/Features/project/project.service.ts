import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment';
import { env } from 'process';


@Injectable()
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  GetProjectList=function()
  {
    return this.httpClient.get(environment.url+environment.ProjectList);
  }
  CreateProject=function(data)
  {
    return this.httpClient.post(environment.url+environment.CreateProject,data);
  }
  deleteProject=function(data)
  {
    return this.httpClient.post(environment.url+environment.deleteProject,{projectId: data.projectId});
  }
  getEmployeeList=function()
  {
    return this.httpClient.get(environment.url+environment.employeeData);
  }
}
