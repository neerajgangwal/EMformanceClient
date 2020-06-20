import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'

@Injectable()
export class RoleService {

  constructor(private httpClient:HttpClient) { }
  addRole=function()
  {
    return this.httpClient.get(environment.url+environment.CreateRole);
  }
}
