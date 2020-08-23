import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../../Services/user.service';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpclient:HttpClient,private userService:UserService) {

   }

   createFeedback=function(data)
   {
    data.createdBy=this.userService.LoggedInUser.Id;
     return this.httpclient.post(this.userService.LoggedInUser.PortalName +environment.addFeedabck,data);
   }

   GetProjectList=function(id)
   {
     return this.httpclient.get(this.userService.LoggedInUser.PortalName+environment.ProjectList+id);
   }

   GetEmployeeData=function()
   {
     return this.httpclient.get(this.userService.LoggedInUser.PortalName+environment.employeeData);
   }

   GetRequestedFeedbacks=function(id)
   {
     return this.httpclient.get(this.userService.LoggedInUser.PortalName+environment.getRequestedFeedback+id)
   }

   GetEmployeesData=function()
   {
      return this.httpclient.get(this.userService.LoggedInUser.PortalName+environment.employeeData)
   }
   GetProjectListByid=function(id)
   {
      return this.httpclient.get(this.userService.LoggedInUser.PortalName+environment.ProjectList+id);
   }

   GetMyFeedback=function(id)
   {
      return this.httpclient.get(this.userService.LoggedInUser.PortalName+environment.getMyFeedback+id);
   }

   UpdateFeedback=function(data)
   {
     return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.UpdateFeedback,data);
   }

   GetFeedbackUpdated=function(id)
   {
     return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.getFeedbackByParam,{feedbackFromId:id})
   }

   GetFeedbackByParam=function(data)
   {
     return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.getFeedbackByParam,data);
   }


   GetTaskByProjectId=function(id)
   {
     return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.getTask,{projectId:id});
   }
   getTasks=function()
   {
    return this.httpclient.post(this.userService.LoggedInUser.PortalName+environment.getTask,{});
   }

}
