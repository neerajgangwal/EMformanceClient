import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable(
 )
export class TaskService {

  constructor(httpclient:HttpClient) { }

  getTask=function()
  {
    return this.httpclient.get(environment.url+environment.getTask);
  }
}
