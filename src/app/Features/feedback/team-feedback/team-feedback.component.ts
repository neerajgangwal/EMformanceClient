import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import * as $ from 'jquery';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../Services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-team-feedback',
  templateUrl: './team-feedback.component.html',
  styleUrls: ['./team-feedback.component.css'],
})
export class TeamFeedbackComponent implements OnInit {
  CreateForm: FormGroup;
  FeedbackForm: FormGroup;
  feedbackList: any[] = [];
  ParameterForm: FormGroup;
  ParametersList: any[] = [];
  SelectedList: any[] = [];
  ProjectList: any[];
  TaskList:any[]
  EmployeeList: any[];
  FeedbackListByParamDictionary: Map<number, any[]>;
  selectedProject: String = '';
  FeedbackListParamsKeys:any[]=[];
  SelectedFeedbackFor:any;

  constructor(
    private feedbackService: FeedbackService,
    private messageService: MessageService,
    private userservice: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    $('.slide-close').on('click', function () {
      $(this).parent().removeClass('open-slide');
      $('body').removeClass('gray-over');
    });




 this.feedbackService.GetProjectList(-1).subscribe((res) => {
      this.ProjectList = res.dataObj;
      console.log('projectList ' + this.ProjectList);
    });

    this.feedbackService.GetEmployeeData().subscribe((res) => {
      console.log('employeeList ' + res.dataObj.employeeFname);
      this.EmployeeList = res.dataObj;
      this.EmployeeList.forEach((element) => {
        element.FullName =
          element.employee.employeeFname + ' ' + element.employee.employeeMname;
      });
    });
    this.feedbackService
  }

  initialiseCreateForm = function () {
    $('#add-task').addClass('open-slide');
    $('body').addClass('gray-over');

    this.CreateForm = this.fb.group({
      projectId: ['', Validators.required],
      taskId:['',Validators.required],
      feedbackForId: ['', Validators.required],
      feedbackFromId: ['', Validators.required],
      feedbackReply: ['', Validators.required],
      feedbackRequesterId: [
        this.userservice.LoggedInUser.Id,
        Validators.required,
      ],
      feedbackStatus: [1, Validators.required],
      feedbackParameteres: [this.SelectedList, Validators.required],
    });
    this.intialiseAddParameter();
  };

  createButtonClicked = function () {
    this.initialiseCreateForm();
  };

  SelectProjectChanged = function (id) {
    this.feedbackService.GetTaskByProjectId(id).subscribe((res) => {
      this.CreateForm.patchValue({
        taskId: ''
      });
      this.TaskList = res.dataObj;
      console.log(this.TaskList);
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

  addToSelectList(id) {
    console.log('id ' + id);
    for (let param of this.SelectedList) {
      if (param.paramId == id) {
        return;
      }
    }
    this.ParametersList.forEach((element) => {
      console.log(element.paramId);
      if (element.paramId == id) {
        this.SelectedList.push(element);
      }
    });
  }

  ResetForm() {
    this.CreateForm.reset;
    this.SelectedList = [];
  }
  RemoveParamFromSelectList(element) {
    this.SelectedList.splice(this.SelectedList.indexOf(element), 1);
  }

  CreateButtonClicked = function (data) {
    console.log(data);
    this.feedbackService.createFeedback(data).subscribe(
      (res) => {
        if (res.errorCode == 0) {
          console.log(res);
          this.feedbackList.push(res.dataObj);
          this.messageService.add({
            severity: 'success',
            summary: 'Feedback request Created',
            detail: 'Feedback request Created successfully',
          });
          this.ResetForm();
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: res.errorMsg,
          });
        }
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: 'Something went wrong please try after some time',
        });
      }
    );
  };

  ProjectFilterChange(id) {
    console.log("project chage")
    this.feedbackService.GetFeedbackByParam({ projectId: id }).subscribe(
      (res) => {
        if (res.errorCode == 0) {
          console.log("test");
          this.FeedbackListByParamDictionary = this.getForRequestSummary(res.dataObj);
          // this.FeedbackListParams=[];
          // var keys=feedbackListByParamDictionary.keys();
          // for (let index = 0; index < keys; index++) {
          //   const element = array[index];

          // }
          console.log(this.FeedbackListByParamDictionary);
        } else {
        }
      },
      (error) => {}
    );
  }

  UpdateProjectDetails(list) {
    for (let index = 0; index < this.ProjectList.length; index++) {
      const element = list[index];
      var project = this.getProject(element.projectId);
      list[index].projectName = project ? project.projectName : '';
    }
  }

  UpdateEmployeeData(list) {
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
    for (let index = 0; index < this.EmployeeList.length; index++) {
      const element = this.EmployeeList[index];
      if ((element.employee.employeeId == id)) {
        return element;
      }
    }
    return null;
  }

  GetEmployeeNameBasedOnId(id) {
    for (let index = 0; index < this.EmployeeList.length; index++) {
      const element = this.EmployeeList[index];
      if ((element.employee.employeeId == id)) {
        return element.employee.employeeFname+" "+element.employee.employeeMname;
      }
    }
    return "";
  }

  GetEmployeeEmailBasedOnId(id) {
    for (let index = 0; index < this.EmployeeList.length; index++) {
      const element = this.EmployeeList[index];
      if ((element.employee.employeeId == id)) {
        return element.employee.employeeEmail;
      }
    }
    return "";
  }

  getProject(id) {
    for (let index = 0; index < this.ProjectList.length; index++) {
      const element = this.ProjectList[index];
      if ((element.projectId == id)) {
        return element;
      }
    }
    return null;
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



  getDesignationNameForEmployee(empId) {
    for (let index = 0; index < this.EmployeeList.length; index++) {
      const element = this.EmployeeList[index];
      if ((element.employee.employeeId == empId)) {
        return element.designation.designationName;
      }
    }
    return "";
  }

  getForRequestSummary(list) {
    var forDictionary: Map<number, any[]>=new Map<number,any[]>();
    if (list) {
      for (let index = 0; index < list.length; index++) {
        const feedback = list[index];
        var feedbackemployeeList: any[] = [];
        if (forDictionary && forDictionary.has(feedback.feedbackForId)) {
          feedbackemployeeList = forDictionary.get(feedback.feedbackForId);
        }
        feedbackemployeeList.push(feedback);
        forDictionary.set(feedback.feedbackForId, feedbackemployeeList);
      }
    }
    return forDictionary;
  }

  DateFilterChange(data)
  {
    console.log(data);
    console.log("date chage")
    this.feedbackService.GetFeedbackByParam({ feedbackCreatedDate: data }).subscribe(
      (res) => {
        if (res.errorCode == 0) {
          console.log("test");
          this.FeedbackListByParamDictionary = this.getForRequestSummary(res.dataObj);
          console.log(this.FeedbackListByParamDictionary);
        } else {
        }
      },
      (error) => {}
    );
  }
}
