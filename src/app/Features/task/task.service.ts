import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'


@Injectable()
export class TaskService {

  constructor(private httpclient:HttpClient) { 
    
  }
  getTask=function()
    {
      return this.httpclient.post(environment.url+environment.getTask,{})
    }
    CreateTask=function(data)
    {
      return this.httpclient.post(environment.url+environment.createTask,data)
    }
  
}
