import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class AdminProjectService {

  constructor(httpClient:HttpClient) { }
   
  GetProjectList=function()
  {
    return this.httpClient.get(environment.url+environment.ProjectList+"-1");
  }

}
