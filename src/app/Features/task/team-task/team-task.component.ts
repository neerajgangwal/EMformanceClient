import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { LayoutService } from '../../../Services/layout.service';
import { SearchService } from '../../../Services/search.service';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../Services/user.service'
import * as $ from 'jquery';



@Component({
  selector: 'app-team-task',
  templateUrl: './team-task.component.html',
  styleUrls: ['./team-task.component.css']
})
export class TeamTaskComponent implements OnInit {

  TaskList: any[];
  EmployeeList: any[];
  TaskMemberList: any[] = [];
  ProjectsList: any[];
  editTask: any[] = [];
  viewTask: any[] = [];
  teamTasks: any[] = [];
  createTaskForm: FormGroup;
  EditAssignedform: FormGroup;
  EditTaskForm: FormGroup;
  ViewTasks;
  taskStatusFilter="";
  searchText:'';

  SearchResults: any[]=[];
  loading: true;
  FilterKey: string;
  constructor(private taskservice: TaskService,
    private layoutservice: LayoutService,
    public searchservice: SearchService,
    private userservice: UserService,
    private messageService: MessageService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchservice.SetSource(null);
    this.GetTeamTasks();
    $('.slide-close').on('click', function () {
      $(this).parent().removeClass('open-slide');
      $('body').removeClass('gray-over');
    });

    this.taskservice.Getprojects().subscribe(res => {
      if (res.errorCode == 0) {
        this.ProjectsList = res.dataObj;
      }
      else {

      }
    });

    this.taskservice.getEmployeeData().subscribe(res => {
      if (res.errorCode == 0) {
        this.EmployeeList = res.dataObj;
      }
      else {

      }
    });
    this.TaskMemberList = [];
  }


  GetTeamTasks = function () {
    this.taskservice.getMyTeamTask(this.userservice.LoggedInUser.Id).subscribe((res) => {
      this.teamTasks = res.dataObj;
      this.SearchResults=this.teamTasks;
      console.log("test");
      console.log(this.SearchResults);
    }, (err) => {
    });
  }

  InitialiseCreateTaskForm() {
    this.createTaskForm = this.fb.group({
      taskHeading: ['', Validators.required],
      departmentId: 2,
      taskDescription: ['', Validators.required],
      projectId: [-1, Validators.required],
      assignedById: [this.userservice.LoggedInUser.Id],
      assignedToId: ['', Validators.required],
      taskStartDate: ['', Validators.required],
      taskDueDate: ['', Validators.required],
      taskAttachment: [''],
      taskPriority: ['', Validators.required],
      taskStatus: ['', Validators.required],
    })

  }

  InitilizeEditTaskForm = function (data) {
    this.EditTaskForm = this.fb.group({
      taskId: [data.taskId],
      taskHeading: [data.taskHeading],
      departmentId: [2],
      taskDescription: [data.taskDescription],
      projectId: [data.projectId],
      assignedById: [this.userservice.LoggedInUser.Id],
      assignedToId: [1],
      taskStartDate: [data.taskStartDate],
      taskDueDate: [data.taskDueDate],
      taskAttachment: [data.taskAttachment],
      taskPriority: [data.taskPriority],
      taskStatus: [data.taskStatus]
    })
  }

  InitilizeEditAssignedTaskForm = function (data) {
    this.EditAssignedform = this.fb.group({
      employeeTaskId: [data.employeeTaskId],
      employeeId: [data.employeeId],
      activateFlag: [1],
      employeeTaskStatus: [data.employeeTaskStatus],
      createdDate: [data.createdDate]

    })
  }

  createTask() {
    this.InitialiseCreateTaskForm()
    $('#add-team-task').addClass('open-slide');
    $('body').addClass('gray-over');
  }

  createTaskSave = function (data) {
    console.log(data);
    data.assignedToId = -1;
    this.taskservice.CreateTask(data).subscribe((res) => {
      if (res.errorCode == 0) {

        var requestData = this.ConvertDataForAssignEmployees(res.dataObj);
        console.log("requested data", requestData);
        console.log("++++++++");

        this.taskservice.manageEmployeeTask(requestData).subscribe((res) => {
          if (res.errorCode == 0) {
            this.messageService.add({ severity: 'success', summary: 'Task Created', detail: 'Task created successfully' });
            this.ResetForm();
            this.TaskMemberList=[];
            this.GetTeamTasks();
            this.CancelButtonClick();
          }
        })
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }, (error) => {
      console.log(error);
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
    });
  }

  viewIconClicked = function (data) {
    $('#team-task-description').addClass('open-slide');
    $('body').addClass('gray-over');
    console.log(data);
    this.ViewTasks=data;
    console.log(this.ViewTasks);

  }

  editSaveButtonClicked = function (data) {
    data.activateFlag = 1;
    this.taskservice.editTask(data).subscribe((res) => {
      if (res.errorCode == 0) {
        this.InitilizeEditTaskForm(res.dataObj);
        for (let index = 0; index < this.TaskList.length; index++) {
          const element = this.TaskList[index];
          console.log("element.taskId" + element.taskId);
          console.log("data.taskId" + data.taskId);
          if (element.taskId == data.taskId) {
            this.TaskList[index] = res.dataObj;
          }
        }
        this.SearchResults = this.TaskList
        this.messageService.add({ severity: 'success', summary: 'Task updated', detail: 'Task edited successfully' });
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




  editAssignedTaskSaveButtonClicked = function (data) {
    this.taskservice.manageEmployeeTask(data).subscribe((res) => {
      if (res.errorCode == 0) {
        this.InitilizeEditTaskForm(res.dataObj);
        this.messageService.add({ severity: 'success', summary: 'Task updated', detail: 'Task edited successfully' });
        this.ResetForm();
        this.CancelButtonClick();
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }, (error) => {
      console.log(error);
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
    });
  }


  ResetForm() {
    this.InitialiseCreateTaskForm();
    this.TaskMemberList = [];

  }

  DeleteTeamIcon(data) {
    this.taskservice.deteleTask(data).subscribe((res) => {
      if (res.errorCode == 0) {

        this.TaskList.splice(this.TaskList.indexOf(data), 1);
        this.SearchResults = this.TaskList;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Team deleted' });
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

  ConvertDataForAssignEmployees(data) {
    var request = [];
    this.TaskMemberList.forEach((element) => {
      request.push({
        employeeId: element.employeeId,
        taskId: data.taskId,
        comment: "",
        reply: "",
        assignedById: 3,
        employeeTaskStatus: data.taskStatus,
        completionDate: data.taskDueDate,
        createdDate: new Date()
      });
    });
    return request;
  }

  editIconClicked(data) {
    this.InitilizeEditTaskForm(data);
    $('#edit-team-task').addClass('open-slide');
    $('body').addClass('gray-over');
  }

  AddMemberToTaskList(id) {
    console.log(id);
    for (let member of this.TaskMemberList) {
      if (member.employeeId == id) {
        return;
      }
    }
    this.EmployeeList.forEach((element) => {

      if (element.employeeId == id) {
        this.TaskMemberList.push(element);
      }
    })
  }

  RemoveMemberFromTaskList(element) {
    this.TaskMemberList.splice(this.TaskMemberList.indexOf(element), 1);
  }

  public FilterData = function (event) {
    var temp = this.TaskList
    var data = event.target.value;
    console.log(data);
    console.log(temp);
    this.SearchResults = temp.filter(item => {
      console.log(item);
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

  DeleteAssignedTaskIcon(data) {
    var request={
      employeeTaskId: data.employeeTaskId,
     employeeId: data.employeeTaskId,
     activateFlag: 0,
     taskId: data.taskId,
    }
    data.activateFlag = 0;
    this.taskservice.deleteManageEmployeeTask(request).subscribe((res) => {
      if (res.errorCode == 0) {
        this.GetTeamTasks();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task deleted' });
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

  SaveReply = function(data)
  {
    var request={
      employeeTaskId:data.employeeTaskId,
      reply:data.reply,
      taskId:data.taskId,
      employeeId:data.employeeId
    }
    this.taskservice.updateAssignedTask(request).subscribe((res)=>
    {
      if(res.errorCode==0)
      {
        $('.slide-close').parent().removeClass('open-slide');
        $('body').removeClass('gray-over');
        this.messageService.add({ severity: 'success', summary: 'Task updated', detail: 'Replied successfully' });
      }
      else{
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }, (error) => {
      console.log(error);
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
    });
  }

}
