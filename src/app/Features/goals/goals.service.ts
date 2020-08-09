import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { UserService } from 'src/app/Services/user.service';

@Injectable()
export class GoalsService {

  constructor(private httpclient:HttpClient,private userService:UserService) { }

  addGoal=function(data)
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.addGoal,data);
  }
  getGoal=function()
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.getGoal,{});
  }
  deleteGoal=function(data)
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.deleteGoal,{goalId:data})
  }
  updateGoal=function(data)
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.updateGoal,data)
  }
}
