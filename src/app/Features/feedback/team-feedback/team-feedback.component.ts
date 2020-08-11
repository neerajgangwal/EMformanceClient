import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../Services/user.service';


@Component({
  selector: 'app-team-feedback',
  templateUrl: './team-feedback.component.html',
  styleUrls: ['./team-feedback.component.css']
})
export class TeamFeedbackComponent implements OnInit {

  CreateForm: FormGroup;
  FeedbackForm: FormGroup;
  feedbackList: any[]=[];
  ParameterForm:FormGroup;
  ParametersList: any[] = [];
  SelectedList:any[]=[];
  ProjectList: any[];
  EmployeeList: any[];

  constructor(private feedbackService: FeedbackService,
    private messageService: MessageService,
    private userservice:UserService,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    $('.slide-close').on('click', function () {
      $(this).parent().removeClass('open-slide');
      $('body').removeClass('gray-over');
    })
  }




  initialiseCreateForm = function () {
    $('#add-task').addClass('open-slide');
    $('body').addClass('gray-over');

    this.feedbackService.GetProjectList(-1).subscribe((res) => {
      this.ProjectList = res.dataObj;
      console.log("projectList " + this.ProjectList);
    });
    this.feedbackService.GetEmployeeData().subscribe((res) => {
      console.log("employeeList "+res.dataObj.employeeFname)
      this.EmployeeList = res.dataObj;
      this.EmployeeList.forEach((element) => {
        element.FullName = element.employee.employeeFname + " " + element.employee.employeeMname;
      })

    })

    this.CreateForm = this.fb.group({
      projectId:['', Validators.required],
      feedbackForId:['', Validators.required],
      feedbackFromId:['', Validators.required],
      feedbackReply:['', Validators.required],
      feedbackRequesterId:[this.userservice.LoggedInUser.Id, Validators.required],
      feedbackStatus:[1, Validators.required],
      feedbackParameteres:[this.SelectedList, Validators.required],
    })
    this.intialiseAddParameter();

  }

  createButtonClicked = function () {
    this.initialiseCreateForm();
  }

  intialiseAddParameter = function () {
  this.ParameterForm=this.fb.group(
    {
      paramId:['',Validators.required],
      description:['',Validators.required]
    }
  )
    this.ParametersList = [{ "paramId": 1, "description": "Team Player" },
    { "paramId": 2, "description": "Willingness to help other" },
    { "paramId": 3, "description": "Communications Skills" },
    { "paramId": 4, "description": "Motivate colleague" },
    { "paramId": 5, "description": "Leadership qualities" },
    { "paramId": 6, "description": "Strength" },
    { "paramId": 7, "description": "Weakness" },
    { "paramId": 8, "description": "Creativity" }]

  }

  addToSelectList(id)
  {
    console.log("id "+id);
    for(let param of this.SelectedList)
    {
      if (param.paramId == id) {
        return;
      }
    }
    this.ParametersList.forEach((element) => {
      console.log(element.paramId)
      if (element.paramId== id) {
        this.SelectedList.push(element);
      }
    })
    }

    ResetForm()
    {
      this.CreateForm.reset;
      this.SelectedList=[];
    }
    RemoveParamFromSelectList(element) {
      this.SelectedList.splice(this.SelectedList.indexOf(element), 1);
    }

    CreateButtonClicked = function (data) {

      console.log(data);
      this.feedbackService.createFeedback(data).subscribe((res) => {
        if (res.errorCode == 0) {
          console.log(res);
          this.feedbackList.push(res.dataObj);
          this.messageService.add({ severity: 'success', summary: 'Feedback request Created', detail:'Feedback request Created successfully' });
          this.ResetForm();

        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
        }
      }, (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
      });
    }


}
