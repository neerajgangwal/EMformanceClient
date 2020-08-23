import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../Services/layout.service';
import { GoalsService } from '../goals.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { UserService } from 'src/app/Services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-my-goal',
  templateUrl: './my-goal.component.html',
  styleUrls: ['./my-goal.component.css']
})
export class MyGoalComponent implements OnInit {

  goallist: any[];
  SpecificGoal:any[];
  createGoalForm: FormGroup;
  editGoalForm: FormGroup;
  SearchResults: any[];
  FilterKey: string;
  progressData: number;
  displayConfirmationDialog: boolean = false;
  confirmationNote: string = '';
  confirmationDialogSelectedGoal = null;
  constructor(
    private goalservice: GoalsService,
    private layoutservice: LayoutService,
    private fb: FormBuilder,
    public userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.goalservice.getGoal(this.userService.LoggedInUser.Id).subscribe((res) => {
      if (res.errorCode == 0) {

        this.goallist = res.dataObj;
        this.UpdateDashboardFormsToList(this.goallist);
        console.log(this.goallist);
        this.SearchResults = this.goallist;
        this.FilterKey = "goalHeading";
      }
      else {

      }
    })

    $('.slide-close').on('click', function () {
      $(this).parent().removeClass('open-slide');
      $('body').removeClass('gray-over');
    });

  }


  UpdateDashboardFormsToList(data) {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      data[index].formGroup = this.fb.group({
        goalStatus: [element.goalStatus],
        goalPercentage: [element.goalPercentage]
      });
    }
    console.log(data);
  }
  RadioButtonClick = function (data, form, goal) {
    form.patchValue({
      goalStatus: data
    })
    this.SaveIconClicked(form, goal)
  }

  SaveIconClicked(form, goal) {
    goal.goalStatus = form.value.goalStatus;
    goal.goalPercentage = form.value.goalPercentage;
    goal.formGroup = null;
    this.editSaveButtonClicked(goal);
  }

  ComformationDialog() {

  }


  initialiseCreateForm = function () {
    $('#add-task').addClass('open-slide');
    $('body').addClass('gray-over');

    this.createGoalForm = this.fb.group({
      taskId: [1, Validators.required],
      departmentId: [2, Validators.required],
      employeeId: [this.userService.LoggedInUser.Id],
      goalStatus: ['Inprogress'],
      goalApprovedStatus: ['Inprogress'],
      confirmNote: [''],
      goalHeading: ['', Validators.required],
      goalDescription: ['', Validators.required],
      goalAttachment: [''],
      goalStartDate: ['', Validators.required],
      goalEndDate: ['', Validators.required],
      statusLevel: []
    });
  }


  get GetGoalCompletedList() {
    var list: any[] = [];
    this.SearchResults.forEach(element => {
      if (element.goalStatus == "completed" || element.goalStatus == "submitted" || element.goalStatus == "approved") {
        list.push(element);
      }
    });
    return list;
  }

  get GetGoalInprogressList() {
    var list: any[] = [];
    this.SearchResults.forEach(element => {
      if (element.goalStatus != "completed" && element.goalStatus != "submitted" && element.goalStatus != "approved") {
        list.push(element);
      }
    });
    return list;
  }

  initialiseEditForm = function (data) {
    console.log("edit");
    console.log(data.goalId);
    this.editGoalForm = this.fb.group({
      goalId: [data.goalId, Validators.required],
      taskId: [data.goalId, Validators.required],
      departmentId: [data.departmentId, Validators.required],
      employeeId: [this.userService.LoggedInUser.Id],
      goalStatus: [data.goalStatus, Validators.required],
      goalApprovedStatus: [data.goalApprovedStatus, Validators.required],
      confirmNote: ['', Validators.required],
      goalHeading: [data.goalHeading, Validators.required],
      goalDescription: [data.goalDescription, Validators.required],
      goalAttachment: [data.goalAttachment, Validators.required],
      goalStartDate: [data.goalStartDate, Validators.required],
      goalEndDate: [data.goalEndDate, Validators.required],
    });

    console.log("edit goal form " + this.editGoalForm.value);
  }

  AddGoalClicked() {
    console.log("method clicked");
    this.initialiseCreateForm();
  }

  CreateGoal = function (data) {
    console.log("create button clicked");
    console.log("data " + data);
    this.goalservice.addGoal(data).subscribe((res) => {
      console.log("res " + res);
      if (res.errorCode == 0) {
        var resultData = res.dataObj;
        resultData.formGroup = this.fb.group({
          goalStatus: [resultData.goalStatus],
          goalPercentage: [resultData.goalPercentage]
        });
        this.goallist.push(resultData);
        console.log("success");
        this.SearchResults = this.goallist
        this.messageService.add({ severity: 'success', summary: 'goal created', detail: 'Successfully created goal' });
        this.CancelButtonClick();
        this.createGoalForm.reset();

      }
      else {
        this.messageService.add({ severity: 'error', summary: 'creation failed', detail: 'Failed to create goal' });
      }
    })
  }

  EditIconClicked(data) {
    $('#edit-task').addClass('open-slide');
    $('body').addClass('gray-over');
    console.log("edit icon clicked");
    console.log("data " + data);
    this.initialiseEditForm(data);
  }

  editSaveButtonClicked = function (data) {
    data.activateFlag = 1;
    console.log("save" + data.goalId);
    this.goalservice.updateGoal(data).subscribe((res) => {
      if (res.errorCode == 0) {
        this.initialiseEditForm(res.dataObj);
        var resultData = res.dataObj;
        resultData.formGroup = this.fb.group({
          goalStatus: [resultData.goalStatus],
          goalPercentage: [resultData.goalPercentage]
        });
        for (let index = 0; index < this.goallist.length; index++) {
          const element = this.goallist[index];
          console.log("element.goalId" + element.goalId);
          console.log("data.goalId" + data.goalId);
          if (element.goalId == data.goalId) {
            this.goallist[index] = resultData;
          }
        }
        this.SearchResults = this.goallist
        this.messageService.add({ severity: 'success', summary: 'Goal updated', detail: 'Goal updated successfully' });
        this.CancelButtonClick();
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

  DeleteIconClicked(data) {
    console.log("delete icon clicked");
    console.log("data is " + data);
    this.goalservice.deleteGoal(data.goalId).subscribe((res) => {
      if (res.errorCode == 0) {
        this.goallist.splice(this.goallist.indexOf(data), 1);
        this.SearchResults = this.goallist;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'goal deleted' });
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }
      , (err) => {
        console.log(err);
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
      });

  }

  setStyles(goalStatus) {
    if (goalStatus == "hold") {
      return "#ffeccc"
    }
    else if(goalStatus=='delay')
    {
      return "#ffd3d8"
    }
    else {
      return 'white'
    }
  }


  public FilterData = function (event) {
    var temp = this.goallist
    var data = event.target.value;
    console.log(data);
    console.log(temp);

    this.SearchResults = temp.filter(item => {
      console.log(item);
      console.log("---------");
      console.log(this.FilterKey);
      console.log(item[this.FilterKey]);
      console.log(item[this.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
      return item[this.FilterKey].toLowerCase().includes(data.toLowerCase());
    }
    )
  }

  CancelButtonClick() {
    $('.slide-close').parent().removeClass('open-slide');
    $('body').removeClass('gray-over');
  }

  SubmitConfirmationDialog() {
    var goal = this.confirmationDialogSelectedGoal;
    goal.confirmNote = this.confirmationNote;
    goal.goalStatus = "submitted";
    goal.formGroup = null;

    this.editSaveButtonClicked(goal);
    this.ResetConfirmationDialog();
  }

  confirmationDialogOpen(goal) {
    this.confirmationDialogSelectedGoal = goal;
    this.displayConfirmationDialog = true;
  }

  ResetConfirmationDialog() {
    this.confirmationNote = '';
    this.displayConfirmationDialog = false;
  }

  getGoalDescription=function(id)
  {
    $('#task-description').addClass('open-slide');
    $('body').addClass('gray-over');

    this.goalservice.getGoalById(id).subscribe((res)=>{
     if(res.errorCode==0)
     {
        this.SpecificGoal=res.dataObj;
     }

   })
  }



}
