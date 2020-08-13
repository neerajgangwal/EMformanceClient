import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { UserService } from '../../Services/user.service';


@Injectable()
export class LoginService {
  url: string = environment.url;
  constructor(private httpClient: HttpClient,private userService:UserService) { }

  LoginFunction = function (data) {
    return this.httpClient.post(this.url+environment.login, data);
  }

  getCompany=function(email){
    return this.httpClient.post(this.url+environment.getCompany, {adminEmail: email});
  }
  TestFunction = function () {
    console.log("test");
    return this.httpClient.get(this.url+"getProjectList");
  }

  getPermissions=function(portalName,id){
    return this.httpClient.get( 'http://3.133.244.20:8080/' + portalName + '/emf/'+environment.getEmployeeElementsMapping+id);
  }
}
