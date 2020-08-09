import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { UserService } from '../../Services/user.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url: string = environment.url;
  constructor(private httpClient: HttpClient,private userService:UserService) { }

  SignupFunction = function (data) {
    return this.httpClient.post(this.url+environment.signup, data);
  }

  ValidateToken=function(token)
  {
    return this.httpClient.get(this.url+environment.emailVerification+token);
  }

}
