import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { UserService } from 'src/app/Services/user.service';
@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpclient:HttpClient,private userService:UserService) { }

    GetAllTheSkills=function(){
      return this.httpclient.post(this.userService.LoggedInUser.PortalName+ environment.getSkill,{});
    }

    CreateSkill=function(skillNamedata){
      return this.httpclient.post(this.userService.LoggedInUser.PortalName+ environment.addSkill,{skillName: skillNamedata,createdBy:this.userService.LoggedInUser.Id});
    }

    RemoveMappingForSkill=function(data){
      return this.httpclient.post(this.userService.LoggedInUser.PortalName+ environment.mapEmployeeSkill,[data]);
    }

    MapEmployeeWithSkill=function(data){
      return this.httpclient.post(this.userService.LoggedInUser.PortalName+ environment.mapEmployeeSkill,[data])
    }

    GetSkillsMappedToEmployee=function(employeeIdData)
    {
      return this.httpclient.post(this.userService.LoggedInUser.PortalName+ environment.getEmployeeSkill,{employeeId:employeeIdData});
    }

    UpdateSkill=function(skillId,SkillName)
    {
      return this.httpclient.post(this.userService.LoggedInUser.PortalName+ environment.updateSkill,{skillId:skillId,skillName:SkillName});
    }
}
