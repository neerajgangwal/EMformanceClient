import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { UserService } from 'src/app/Services/user.service';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient ,private userService:UserService) { }

  addCompany=function(data)
  {
    return this.httpClient.post(environment.url+environment.addCompany,data);
  }
}
