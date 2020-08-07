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

    deteleTask=function(data)
    {
      return this.httpclient.post(environment.url+environment.deleteTask,data)
    }
    
    Getprojects=function()
    {
      return this.httpclient.get(environment.url+environment.ProjectList+"-1");
    }

    editTask=function(data)
    {
      return this.httpclient.post(environment.url+environment.updateTask,data)
    }
  
    getTaskForView=function(id)
    {
      return this.httpclient.post(environment.url+environment.getTask,{"taskId":id})

    }
    
  
}
