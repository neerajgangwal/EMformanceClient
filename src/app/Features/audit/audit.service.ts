import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'
import {UserService} from '../../Services/user.service'
@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private httpClient:HttpClient, private userService:UserService) { }

  getAuditData=function()
  {

    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.getAuditLog,{});
  }

  getEmployeelist=function()
  {

    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.getEmployeeData);
  }

}
