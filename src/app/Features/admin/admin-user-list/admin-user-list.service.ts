import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { UserService } from 'src/app/Services/user.service';

@Injectable()
export class AdminUserListService {

  constructor(private httpClient:HttpClient,private userService:UserService) { }
  
  getUserList=function()
  {

    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.getUserList,{});

  }
}
