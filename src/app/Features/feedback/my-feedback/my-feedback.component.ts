import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../Services/user.service';

@Component({
  selector: 'app-my-feedback',
  templateUrl: './my-feedback.component.html',
  styleUrls: ['./my-feedback.component.css'],
})
export class MyFeedbackComponent implements OnInit {
  FeedbackRequestForm: FormGroup;
  employeesDetails: any[] = [];
  FeedbackList: any[];
  MyFeedbackList: any[];
  projectdetails;
  ParameterForm: FormGroup;
  ParametersList: any[] = [];
  FeedbackUpdatedList:any=[];
  ProjectList:any[]=[];
  TasksList:any[]=[];

  constructor(
    private feedbackService: FeedbackService,
    private fb: FormBuilder,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {

    this.feedbackService.GetProjectList(-1).subscribe((res) => {
      this.ProjectList = res.dataObj;
      console.log('projectList ' + this.ProjectList);
    });

    this.feedbackService.getTasks().subscribe((res) => {
      this.TasksList = res.dataObj;
    });

    this.feedbackService.GetEmployeesData().subscribe((res) => {
      this.employeesDetails = res.dataObj;
      console.log('employee list' + this.employeesDetails);


      this.feedbackService
        .GetRequestedFeedbacks(this.userService.LoggedInUser.Id)
        .subscribe((res) => {
          if (res.errorCode == 0) {
            if (res.dataObj != null) {
              this.FeedbackList = res.dataObj;
              this.UpdateFeedbackListWithEmployeeData(this.FeedbackList);
              this.UpdateProjectDetails();
            }
          } else {
          }
        });
        this.feedbackService.GetFeedbackUpdated(this.userService.LoggedInUser.Id)
        .subscribe((res) => {
          if (res.errorCode == 0) {
            if (res.dataObj != null) {
              this.FeedbackUpdatedList = res.dataObj;
              this.UpdateFeedbackListWithEmployeeData(this.FeedbackUpdatedList);
              this.UpdateProjectDetails();
            }
          } else {
          }
        });

      this.feedbackService
        .GetMyFeedback(this.userService.LoggedInUser.Id)
        .subscribe((res) => {
          if (res.errorCode == 0) {
            if (res.dataObj != null) {
              this.MyFeedbackList = res.dataObj;
              this.UpdateFeedbackListWithEmployeeData(this.MyFeedbackList);
            }
          } else {
          }
        });
    });
    this.intialiseAddParameter();

    this.FeedbackRequestForm = this.fb.group({
      feedbackRequestId: ['', Validators.required],
      feedbackForId: ['', Validators.required],
      feedbackFromId: ['', Validators.required],
      feedbackRequesterId: ['', Validators.required],
      feedbackStatus: ['', Validators.required],
      projectId: ['', Validators.required],
      taskId: ['', Validators.required],
      feedbackReply: ['', Validators.required],
      feedbackCreatedDate: ['', Validators.required],
      feedbackUpdatedDate: ['', Validators.required],
      activateFlag: ['', Validators.required],
      description: ['', Validators.required],
      blindRequest: ['', Validators.required],
      feedbackGivenDate: ['', Validators.required],
      projectname: ['', Validators.required],
      feedbackParameteres: ['', Validators.required],
    });
  }

  intialiseAddParameter = function () {
    this.ParameterForm = this.fb.group({
      paramId: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.ParametersList = [
      { paramId: 1, description: 'Team Player' },
      { paramId: 2, description: 'Willingness to help other' },
      { paramId: 3, description: 'Communications Skills' },
      { paramId: 4, description: 'Motivate colleague' },
      { paramId: 5, description: 'Leadership qualities' },
      { paramId: 6, description: 'Strength' },
      { paramId: 7, description: 'Weakness' },
      { paramId: 8, description: 'Creativity' },
    ];
  };

  UpdateProjectDetails() {
    for (let index = 0; index < this.FeedbackList.length; index++) {
      const element = this.FeedbackList[index];
      this.feedbackService
        .GetProjectListByid(element.projectId)
        .subscribe((res) => {
          this.FeedbackList[index].projectName = res.dataObj.projectName
            ? res.dataObj.projectName
            : '';
        });
    }
  }

  UpdateFeedbackListWithEmployeeData(list) {
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      var employee = this.GetEmployeeDataBasedOnId(element.feedbackForId);

      list[index].emailId = employee ? employee.employee.employeeEmail : '';
      list[index].designation = employee
        ? employee.designation.designationName
        : '';
      list[index].name = employee
        ? employee.employee.employeeFname +
          ' ' +
          employee.employee.employeeMname
        : '';
    }
  }

  GetEmployeeDataBasedOnId(id) {
    for (let index = 0; index < this.employeesDetails.length; index++) {
      const element = this.employeesDetails[index];
      if ((element.employee.employeeId == id)) {
        return element;
      }
    }
    return null;
  }

  GetEmployeeNameBasedOnId(id) {
    for (let index = 0; index < this.employeesDetails.length; index++) {
      const element = this.employeesDetails[index];
      if ((element.employee.employeeId == id)) {
        return element.employee.employeeFname+" "+element.employee.employeeMname;
      }
    }
    return "";
  }

  GetRequestedCount()
  {
if(this.FeedbackList)
{
      var data=this.FeedbackList.filter(d=>d.feedbackStatus=='1');
      if(data)
      {
        return data.length;
      }
    }
      return 0;
  }

  getProject(id) {
    this.feedbackService.GetProjectListByid(id).subscribe((res) => {
      this.projectdetails = res.dataObj;
      console.log('test' + this.projectdetails);
    });
    return this.projectdetails;
  }

  GetFeedbackParameterNames(paramId) {
    for (let index = 0; index < this.ParametersList.length; index++) {
      const element = this.ParametersList[index];
      if (element.paramId == paramId) {
        return element.description;
      }
    }
    return '';
  }

  GetIndexInFeedbackList(id)
  {
    for (let index = 0; index < this.FeedbackList.length; index++) {
      const element = this.FeedbackList[index];
      if(element.feedbackRequestId==id)
      {
        return index;
      }
    }
    return -1;
  }

  SubmitFeedbackReply(data) {
    data.feedbackStatus = 3;
    this.feedbackService.UpdateFeedback(data).subscribe(
      (res) => {
        if (res.errorCode == 0) {
          var responseObj=res.dataObj;
          responseObj.name=data.name;
          responseObj.designation=data.designation;
          responseObj.emailId=data.emailId;
          this.MyFeedbackList=responseObj;
          this.messageService.add({
            severity: 'success',
            summary: 'Team Created',
            detail: 'Via MessageService',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: res.errorMsg,
          });
        }
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed please try again',
        });
      }
    );
  }

  SubmitFeedback(data,index)
  {
    data.feedbackStatus = 2;
    this.feedbackService.UpdateFeedback(data).subscribe(
      (res) => {
        if (res.errorCode == 0) {
          var responseObj=res.dataObj;
          responseObj.name=data.name;
          responseObj.designation=data.designation;
          responseObj.emailId=data.emailId;
          console.log(this.GetIndexInFeedbackList(data.feedbackRequestId));
          var dataIndex=this.FeedbackList.indexOf(this.FeedbackList.filter(d=>d.feedbackRequestId==data.feedbackRequestId));
          console.log(dataIndex);
          this.FeedbackList[this.GetIndexInFeedbackList(data.feedbackRequestId)]=responseObj;
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Feedback submitted successfully',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: res.errorMsg,
          });
        }
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed please try again',
        });
      }
    );
  }

  RemoveFromRequestedFeedback(feedbackId){
    var index=this.FeedbackList.findIndex(d=>d.feedbackRequestId==feedbackId);
    if(index!=-1)
    {
      this.FeedbackList.splice(index,1);
    }
  }

  getProjectName(id) {
    for (let index = 0; index < this.ProjectList.length; index++) {
      const element = this.ProjectList[index];
      if ((element.projectId == id)) {
        return element.projectName;
      }
    }
    return "";
  }

  getTaskName(id) {
    for (let index = 0; index < this.TasksList.length; index++) {
      const element = this.TasksList[index];
      if (element.taskId == id) {
        return element.taskHeading;
      }
    }
    return "";
  }

  GetEmployeeEmailBasedOnId(id) {
    for (let index = 0; index < this.employeesDetails.length; index++) {
      const element = this.employeesDetails[index];
      if ((element.employee.employeeId == id)) {
        return element.employee.employeeEmail;
      }
    }
    return "";
  }

  getDesignationNameForEmployee(empId) {
    for (let index = 0; index < this.employeesDetails.length; index++) {
      const element = this.employeesDetails[index];
      if ((element.employee.employeeId == empId)) {
        return element.designation.designationName;
      }
    }
    return "";
  }


}
