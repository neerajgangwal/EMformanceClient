import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment'

@Injectable()
export class EvaluateService {

  constructor(private httpClient:HttpClient) { }

  getSkill=function()
  {
    return this.httpClient.post(environment.url+environment.getSkill,{});
  }
}
