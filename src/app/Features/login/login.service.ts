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

  TestFunction = function () {
    console.log("test");
    return this.httpClient.get(this.url+"getProjectList");
  }
}
