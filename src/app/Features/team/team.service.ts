import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { UserService } from 'src/app/Services/user.service';

@Injectable()
export class TeamService {

  constructor(private httpclient:HttpClient,private userService:UserService) { }

  getTeam=function()
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.getTeam,{});
  }

  getProjects=function()
  {
    return this.httpclient.get(this.userService.LoggedInUser.PortalName+environment.ProjectList+"-1");
  }

  createTeam=function(data)
  {
    data.createdBy=this.userService.LoggedInUser.Id;
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.createTeam,data);
  }

  getTeamMember=function(id)
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.getTeamMember,{teamId:id});
  }

  addTeamMember=function(addTeamMember)
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.addTeamMember,addTeamMember);
  }

  getEmployeeData=function()
  {
    return this.httpclient.get(this.userService.LoggedInUser.PortalName+environment.employeeData);
  }

  deleteTeam=function(data)
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.deleteTeam,{teamId:data.teamId})
  }

  updateTeam=function(data)
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.updateTeam,data)
  }
}
