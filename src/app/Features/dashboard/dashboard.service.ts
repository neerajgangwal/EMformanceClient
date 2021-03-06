import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { UserService } from 'src/app/Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient:HttpClient ,private userService:UserService) { }

  getDashboard=function()
  {
    return this.httpClient.get(this.userService.LoggedInUser.PortalName+environment.getDashboard);
  }
}
