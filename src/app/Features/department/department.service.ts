import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { UserService } from 'src/app/Services/user.service';

@Injectable()
export class DepartmentService {

  constructor(private httpClient:HttpClient,private userService:UserService ) { }

  addDepartment=function(data)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.CreateDepartment,data);
  }
  
  getDepartment=function()
  {
    console.log("Loading/........")
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getDepartment);
  }
  
  updateDepartment=function(data)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.updateDepartment,data)
  }

  deleteDepartment=function(id)
  {
    return this.httpClient.post(this.userService.LoggedInUser.PortalName+environment.deleteDepartment,{departmentId:id});
  }
}
