import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { LayoutService } from '../../../Services/layout.service';
import { SearchService } from '../../../Services/search.service';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../Services/user.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {
  priorityfilter: string = "";
  TaskList: any[];
  TasksAssignedToMe: any[];
  ProjectsList: any[];
  editTask: any[] = [];
  viewTask: any[] = [];
  ViewAssignedtasks;
  commentForm: FormGroup;

  createTaskForm: FormGroup;
  EditTaskForm: FormGroup;
  EditAssignedTaskForm: FormGroup;

  SearchResults: any[];
  SearchResultsAssignedToMe: any[];

  loading: true;
  FilterKey: string;

  constructor(private taskservice: TaskService,
    private layoutservice: LayoutService,
    public searchservice: SearchService,
    public userservice: UserService,
    private messageService: MessageService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    $('.slide-close').parent().removeClass('open-slide');
    $('body').removeClass('gray-over');
    this.searchservice.SetSource(null);
    this.taskservice.getTaskCreatedByMe().subscribe((res) => {
      if (res.errorCode == 0) {
        this.TaskList = res.dataObj;
        console.log(this.TaskList);
        this.SearchResults = this.TaskList;
        this.FilterKey = "taskHeading";
      }
      else {

      }
    });



    this.taskservice.Getprojects().subscribe(res => {
      if (res.errorCode == 0) {
        this.ProjectsList = res.dataObj;
      }
      else {

      }
    });

  }

  InitialiseCreateTaskForm() {
    this.createTaskForm = this.fb.group({
      taskHeading: ['', Validators.required],
      departmentId: [2],
      taskDescription: ['', Validators.required],
      projectId: [-1, Validators.required],
      assignedById: [this.userservice.LoggedInUser.Id],
      assignedToId: [1],
      taskStartDate: ['', Validators.required],
      taskDueDate: ['', Validators.required],
      taskAttachment: [''],
      taskPriority: ['', Validators.required],
      taskStatus: ['']
    })


  }

  GetTasksAssignedToMe = function () {
    this.taskservice.getTasksAssignedToMe().subscribe((res) => {
      if (res.errorCode == 0) {
        this.TasksAssignedToMe = res.dataObj;
        console.log(this.TasksAssignedToMe);
        this.SearchResultsAssignedToMe = this.TasksAssignedToMe;
        this.FilterKey = "taskHeading";
      }
      else {

      }
    });
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
    console.log(data);
    console.log("-------------");
    this.EditAssignedTaskForm = this.fb.group({
      employeeTaskId: [data.employeeTaskId],
      employeeId: [data.employeeId],
      activateFlag: 1,
      taskId: [data.taskId],
      employeeTaskStatus: [data.employeeTaskStatus]
    })
    console.log(this.EditAssignedTaskForm.value);
  }

  IntialiseCommentTaskForm = function (data) {
    this.commentForm = this.fb.group({
      employeeTaskId: [data.employeeTaskId],
      employeeId: [data.employeeId],
      activateFlag: 1,
      taskId: [data.taskId],
      employeeTaskStatus: [data.employeeTaskStatus],
      comment: ['', Validators.required]
    })
  }
  createTask() {
    console.log("create task")
    this.InitialiseCreateTaskForm()
    $('#add-task').addClass('open-slide');
    $('body').addClass('gray-over');
  }

  createTaskSave = function (data) {
    console.log(data);
    this.taskservice.CreateTask(data).subscribe((res) => {
      if (res.errorCode == 0) {
        console.log(res);
        this.TaskList.push(res.dataObj);
        this.SearchResults = this.TaskList
        this.messageService.add({ severity: 'success', summary: 'Task Created', detail: 'Task created successfully' });
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

  viewIconClicked = function (id) {
    console.log("id" + id);
    $('#task-description').addClass('open-slide');
    $('body').addClass('gray-over');
    this.taskservice.getTaskForView(id).subscribe((res) => {
      if (res.errorCode == 0) {
        this.viewTask = res.dataObj[0];
        console.log(this.viewTask);
      }
      else {

      }
    });
  }

  ViewAssignedTaskIconClicked = function (data) {
    console.log("method clicked");
    $('#test-description').addClass('open-slide');
    $('body').addClass('gray-over');
    this.ViewAssignedtasks = data;
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
        this.messageService.add({ severity: 'success', summary: 'Task updated', detail: 'Task created successfully' });
        $('.slide-close').parent().removeClass('open-slide');
        $('body').removeClass('gray-over');
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

  SaveComment = function (data) {
    this.taskservice.updateAssignedTask(data).subscribe((res) => {
      if (res.errorCode == 0) {
        $('.slide-close').parent().removeClass('open-slide');
        $('body').removeClass('gray-over');
        this.messageService.add({ severity: 'success', summary: 'Task updated', detail: 'commented successfully' });


      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });

      }
    }, (error) => {
      console.log(error);
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
    });

  }
  editAssignedSaveButtonClicked = function (data) {
    data.activateFlag = 1;
    this.taskservice.editTask(data).subscribe((res) => {
      if (res.errorCode == 0) {
        this.InitilizeEditAssignedTaskForm(res.dataObj);
        for (let index = 0; index < this.TaskList.length; index++) {
          const element = this.TaskList[index];
          console.log("element.taskId" + element.taskId);
          console.log("data.taskId" + data.taskId);
          if (element.taskId == data.taskId) {
            this.TaskList[index] = res.dataObj;
          }
        }
        this.SearchResults = this.TaskList
        this.messageService.add({ severity: 'success', summary: 'Task updated', detail: 'Task created successfully' });
        $('.slide-close').parent().removeClass('open-slide');
        $('body').removeClass('gray-over');
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


  ResetForm() {
    this.InitialiseCreateTaskForm();
  }

  updateStatusAssignedTask(data) {
    this.taskservice.updateAssignedTask(data).subscribe((res) => {
      if (res.errorCode == 0) {
        for (let index = 0; index < this.TasksAssignedToMe.length; index++) {
          const element = this.TasksAssignedToMe[index];
          if (element.employeeTaskId = data.employeeTaskId) {
            this.TasksAssignedToMe[index].employeeTaskStatus = data.employeeTaskStatus;
          }
        }
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task updated successfully' });

      } else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }
      , (err) => {
        console.log(err);
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
      });
  }

  DeleteTeamIcon(data) {
    this.taskservice.deteleTask(data).subscribe((res) => {
      if (res.errorCode == 0) {

        this.TaskList.splice(this.TaskList.indexOf(data), 1);
        this.SearchResults = this.TaskList;
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

  DeleteAssignedTaskIcon(data) {
    data.activateFlag = 0;
    this.taskservice.deleteManageEmployeeTask(data).subscribe((res) => {
      if (res.errorCode == 0) {
        this.TasksAssignedToMe.splice(this.TaskList.indexOf(data), 1);
        this.SearchResultsAssignedToMe = this.TasksAssignedToMe;
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

  editIconClicked(data) {
    $('#edit-task').addClass('open-slide');
    $('body').addClass('gray-over');
    console.log("snehan" + data)
    this.InitilizeEditTaskForm(data);
    console.log("edit icon " + data);
  }

  editAssignedIconClicked(data) {
    $('#edit-assigned-task').addClass('open-slide');
    $('body').addClass('gray-over');
    console.log(data);
    this.InitilizeEditAssignedTaskForm(data);
    console.log("edit icon " + data);
  }



  public FilterData = function (event, key) {
    var data = event.target.value;
    var dataSource = this.TaskList;

    if (key == "assigned") {
      dataSource = this.TasksAssignedToMe;
    }

    var results = dataSource.filter(item => {
      console.log(item);
      console.log(item[this.FilterKey]);
      console.log(item[this.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
      return item[this.FilterKey].toLowerCase().includes(data.toLowerCase());
    });

    if (key == "created") {
      this.SearchResults = results;
    }
    else {
      this.SearchResultsAssignedToMe = results;
    }
  }

  CancelButtonClick() {
    $('.slide-close').parent().removeClass('open-slide');
    $('body').removeClass('gray-over');
  }
}
