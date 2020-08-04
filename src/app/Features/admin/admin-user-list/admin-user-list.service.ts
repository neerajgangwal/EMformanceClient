import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AdminUserListService {

  constructor(private httpClient:HttpClient) { }
  
  getUserList=function()
  {

    return this.httpClient.post(environment.url+environment.getUserList,{});

  }
}
