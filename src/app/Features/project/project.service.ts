import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment';
import { UserService } from 'src/app/Services/user.service';


@Injectable()
export class ProjectService {

  constructor(private httpClient:HttpClient,private userService:UserService) { }

  GetProjectList=function(id)
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.ProjectList+id);
  }

  GetProjectListById=function(id)
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.ProjectList+id);
  }

  CreateProject=function(data)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.CreateProject,data);
  }

  deleteProject=function(data)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.deleteProject,{projectId: data.projectId});
  }

  getEmployeeList=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.employeeData);
  }

  updateProject=function(data)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.updateProject,data);

  }
  getTeamList=function()
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.getTeam,{})
  }

  updateTeamWithProject(data)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.updateTeam,data)
  }

  getDepartment=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getDepartment);
  }

}
