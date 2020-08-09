import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpclient:HttpClient) { }

    GetAllTheSkills=function(){
      return this.httpclient.post(environment.url+ environment.getSkill,{});
    }

    CreateSkill=function(skillNamedata){
      return this.httpclient.post(environment.url+ environment.addSkill,{skillName: skillNamedata});
    }

    RemoveMappingForSkill=function(data){
      return this.httpclient.post(environment.url+ environment.mapEmployeeSkill,[data]);
    }

    MapEmployeeWithSkill=function(data){
      return this.httpclient.post(environment.url+ environment.mapEmployeeSkill,[data])
    }

    GetSkillsMappedToEmployee=function(employeeIdData)
    {
      return this.httpclient.post(environment.url+ environment.getEmployeeSkill,{employeeId:employeeIdData});
    }

    UpdateSkill=function(skillId,SkillName)
    {
      return this.httpclient.post(environment.url+ environment.updateSkill,{skillId:skillId,skillName:SkillName});
    }
}
