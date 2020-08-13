import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../Entities/User';
import { environment } from '../../environments/environment';
import {} from '../Entities/ElementOperation';
import { ElementsEnum } from '../Entities/ElementsEnum';
import { OperationsEnum } from '../Entities/OperationsEnum';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  private _user: User = null;
  PermissionsData: Map<number, number[]>;


  public logout() {
    localStorage.removeItem('access_token');
    this._user = null;
    this.router.navigate(['/login']);
  }

  public get IsloggedIn(): boolean {
    if (this._user) {
      if (!this.PermissionsData) {
        this.LoggedInUserPermissions(this._user.Permissions);
      }
      return true;
    }
    var userJson = localStorage.getItem('access_token');

    if (userJson == null) {
      return false;
    }
    var user: User = JSON.parse(userJson);
    console.log(user);
    this._user = new User();
    this._user.Id = user.Id;
    this._user.Name = user.Name;
    this._user.EmailId = user.EmailId;
    this._user.PortalName =
      'http://3.133.244.20:8080/' + user.PortalName + '/emf/';
    this.LoggedInUserPermissions(user.Permissions);
    return true;
  }
5
  public get LoggedInUser(): User {
    return this._user;
  }

  public LoggedInUserPermissions(permissions) {
    this.CreateHashMap(permissions);
  }

  CreateHashMap(data) {
    if (data) {
      this.PermissionsData = new Map<number, number[]>();
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        var operations = [];
        for (
          let index2 = 0;
          index2 < element.employeeElementOprationList.length;
          index2++
        ) {
          const operation = element.employeeElementOprationList[index2];
          operations.push(operation.operationId);
        }
        this.PermissionsData.set(element.elementId, operations);
      }
    }
  }

 public CheckPermission(elementId, operationId) {
    if (this.PermissionsData) {
      var list = this.PermissionsData.get(elementId);
      if (list) {
        if (list.indexOf(operationId) > -1) {
          return true;
        }
      }
    }
    return false;
  }

  public CheckElementAvailability(elementId)
  {
    if (this.PermissionsData) {
      var list = this.PermissionsData.get(elementId);
      if (list) {

          return true;
      }
    }
    return false;
  }

  public get Operations()
  {
    return OperationsEnum;
  }

  public get Elements()
  {
    return ElementsEnum;
  }
}
