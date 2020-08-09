import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'
import { UserService } from 'src/app/Services/user.service';

@Injectable()
export class EvaluateService {

  constructor(private httpClient:HttpClient,private userService:UserService) { }

  getSkill=function()
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.getSkill,{});
  }
}
