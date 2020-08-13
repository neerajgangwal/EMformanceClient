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

  addCompany=function(data)
  {
    return this.httpClient.post(environment.url+environment.addCompany,data);
  }

  CreateEmployee=function(company,data)
  {
    return this.httpClient.post(environment.urlPrefix+company+environment.urlSuffix+environment.AddEmployee,data)
  }
  getOperations=function(company)
  {
    return this.httpClient.get(environment.urlPrefix+company+environment.urlSuffix+environment.getOperations);
  }

  getElements=function(company)
  {
    return this.httpClient.get(environment.urlPrefix+company+environment.urlSuffix+environment.getElements);
  }

}
