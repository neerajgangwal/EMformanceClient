import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { UserService } from 'src/app/Services/user.service';


@Injectable()
export class TaskService {

  constructor(private httpclient: HttpClient, private userService: UserService) {

  }

  getTaskCreatedByMe = function () {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName + environment.getTask, { "assignedById": this.userService.LoggedInUser.Id })
  }

  getTasksAssignedToMe = function () {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName + environment.getEmployeeTask, { "employeeId": this.userService.LoggedInUser.Id })
  }

  CreateTask = function (data) {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName + environment.createTask, data)
  }

  deteleTask = function (data) {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName + environment.deleteTask, data)
  }

  Getprojects = function () {
    return this.httpclient.get(this.userService.LoggedInUser.PortalName + environment.ProjectList + "-1");
  }

  editTask = function (data) {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName + environment.updateTask, data)
  }

  getTaskForView = function (id) {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName + environment.getTask, { "taskId": id })

  }

  deleteManageEmployeeTask=function(data)
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName + environment.manageEmployeeTask, [data])
  }

  getMyTeamTask(id) {
    return this.httpclient.get(this.userService.LoggedInUser.PortalName + environment.getMyTeamTask + '-1');
  }

  getEmployeeData = function () {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName + environment.getEmployeeData, {});
  }

  manageEmployeeTask = function (data) {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName + environment.manageEmployeeTask, data)
  }

  updateAssignedTask=function(data)
  {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName + environment.manageEmployeeTask, [data]);
  }


}
