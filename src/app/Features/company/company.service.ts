import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient ) { }

  addCompany=function(data)
  {
    return this.httpClient.post(environment.url+environment.addCompany,data);
  }
}
