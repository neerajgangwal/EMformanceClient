import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import { UserService } from 'src/app/Services/user.service';

@Injectable()
export class AdminProjectService {

  constructor(private httpClient:HttpClient,private userService:UserService) { }
   
  GetProjectList=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.ProjectList+"-1");
  }

}
