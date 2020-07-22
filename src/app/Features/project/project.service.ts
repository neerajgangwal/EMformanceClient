import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment';


@Injectable()
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  GetProjectList=function()
  {
    return this.httpClient.get(environment.url+environment.ProjectList);
  }
  CreateProject=function(data)
  {
    return this.httpClient.post(environment.url+environment.CreateProject,data);
  }
}
