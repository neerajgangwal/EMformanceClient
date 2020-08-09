import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Router} from '@angular/router';
import {User} from '../Entities/User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,private router:Router) {

  }

  private _user:User=null;

  public logout() {
    localStorage.removeItem('access_token');
    this._user=null;
    this.router.navigate(["/login"]);
  }

  public get IsloggedIn(): boolean {
    if(this._user)
    {
      return true;
    }
    var userJson=localStorage.getItem('access_token');

    if(userJson ==null)
    {
      return false;
    }
    var user:User=JSON.parse(userJson);
    console.log(user);
    this._user=new User();
    this._user.Id=user.Id;
    this._user.Name=user.Name;
    this._user.EmailId=user.EmailId;
    this._user.PortalName='http://3.133.244.20:8080/'+user.PortalName+'/emf/';
    return true;
  }

  public get LoggedInUser():User
  {
    return this._user;
  }

}


