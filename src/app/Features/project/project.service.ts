import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment';


@Injectable()
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  GetProjectList=function(id)
  {
    return this.httpClient.get(environment.url+environment.ProjectList+id);
  }

  GetProjectListById=function(id)
  {
    return this.httpClient.get(environment.url+environment.ProjectList+id);
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

  updateProject=function(data)
  {
    return this.httpClient.post(environment.url+environment.updateProject,data);

  }
}
