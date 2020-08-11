import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpclient:HttpClient) {

   }

   createFeedback=function(data)
   {
     return this.httpclient.post(environment.url+environment.addFeedabck,data);
   }

   GetProjectList=function(id)
   {
     return this.httpclient.get(environment.url+environment.ProjectList+id);
   }

   GetEmployeeData=function()
   {
     return this.httpclient.get(environment.url+environment.employeeData);
   }

   GetRequestedFeedbacks=function(id)
   {
     return this.httpclient.get(environment.url+environment.getRequestedFeedback+id)
   }

   GetEmployeesData=function()
   {
      return this.httpclient.get(environment.url+environment.employeeData)
   }
   GetProjectListByid=function(id)
   {
      return this.httpclient.get(environment.url+environment.ProjectList+id);
   }

   GetMyFeedback=function(id)
   {
      return this.httpclient.get(environment.url+environment.getMyFeedback+id);
   }

}
