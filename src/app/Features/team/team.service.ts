import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'

@Injectable()
export class TeamService {

  constructor(private httpclient:HttpClient) { }
  getTeam=function()
  {
    return this.httpclient.post(environment.url+environment.getTeam,{});
  }

  getProjects=function()
  {
    return this.httpclient.get(environment.url+environment.ProjectList);
  }

  createTeam=function(data)
  {
    return this.httpclient.post(environment.url+environment.createTeam,data);
  }

  getTeamMember=function(id)
  {
    return this.httpclient.post(environment.url+environment.getTeamMember,{teamId:id});
  }

  addTeamMember=function(addTeamMember)
  {
    return this.httpclient.post(environment.url+environment.addTeamMember,addTeamMember);
  }

  getEmployeeData=function()
  {
    return this.httpclient.get(environment.url+environment.employeeData);
  }
}
