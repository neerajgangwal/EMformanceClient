import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'

@Injectable()
export class TeamService {

  constructor(private httpclient:HttpClient) { }
  getTeam=function()
  {
    return this.httpclient.post(environment.url+environment.getTeam,{});
  }
}
