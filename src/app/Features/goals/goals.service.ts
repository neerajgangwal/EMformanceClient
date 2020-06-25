import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment'

@Injectable()
export class GoalsService {

  constructor(private httpclient:HttpClient) { }

  addGoal=function()
  {
    return this.httpclient.post(environment.url+environment.addGoal,{});
  }
}
