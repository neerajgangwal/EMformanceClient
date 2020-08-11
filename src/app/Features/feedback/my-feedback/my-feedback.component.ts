import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  projectdetails;
  ParameterForm: FormGroup;
  ParametersList: any[] = [];

  constructor(
    private feedbackService: FeedbackService,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.feedbackService.GetEmployeesData().subscribe((res) => {
      this.employeesDetails = res.dataObj;
      console.log('employee list' + this.employeesDetails);

      this.feedbackService
        .GetRequestedFeedbacks(this.userService.LoggedInUser.Id)
        .subscribe((res) => {
          this.FeedbackList = res.dataObj;
          this.UpdateFeedbackListWithEmployeeData();

          console.log('Feedback list ' + this.FeedbackList);
        });
    });


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

  UpdateFeedbackListWithEmployeeData() {
    for (let index = 0; index < this.FeedbackList.length; index++) {
      const element = this.FeedbackList[index];
      var employee = this.GetEmployeeDataBasedOnId(element.feedbackForId);
      var project = this.getProject(element.projectId);
      this.FeedbackList[index].emailId = employee.employee.employeeEmail;
      this.FeedbackList[index].designation =
        employee.designation.designationName;
      this.FeedbackList[index].name =
        employee.employee.employeeFname + ' ' + employee.employee.employeeMname;
      this.FeedbackList[index].projectname = project.projectName;
    }
  }

  GetEmployeeDataBasedOnId(id) {
    for (let index = 0; index < this.employeesDetails.length; index++) {
      const element = this.employeesDetails[index];
      if ((element.employee.employeeId = id)) {
        return element;
      }
    }
    return null;
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

  getProject(id) {
    this.feedbackService.GetProjectListByid(id).subscribe((res) => {
      this.projectdetails = res.dataObj;
      console.log('test' + this.projectdetails);
    });
    return this.projectdetails;
  }
}
