import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {LayoutService} from '../../../Services/layout.service';
import {SearchService} from '../../../Services/search.service';
import {FormBuilder,FormGroup,Validators, RequiredValidator} from '@angular/forms';
import { MessageService } from 'primeng/api';
import {UserService} from '../../../Services/user.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  TaskList:any[];
  ProjectsList: any[];
  editTask:any[]=[];
  viewTask:any[]=[];


  createTaskForm:FormGroup;
  EditTaskForm:FormGroup;

  SearchResults: any[];
  loading: true;
  FilterKey: string;
  
  constructor(private taskservice:TaskService,
    private layoutservice:LayoutService,
    public searchservice:SearchService,
    private userservice:UserService,
    private messageService: MessageService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchservice.SetSource(null);
    this.taskservice.getTask().subscribe((res) => {
      if (res.errorCode == 0) {
      this.TaskList=res.dataObj;
      console.log(this.TaskList);
      this.SearchResults=this.TaskList;
      this.FilterKey="taskHeading";  
    }
    else{

    }
  });
           
  $('.slide-close').on('click', function() {
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
      
  }

  InitialiseCreateTaskForm()
  {
    this.createTaskForm=this.fb.group({
      taskHeading:['',Validators.required],
      departmentId:2,
      taskDescription:['',Validators.required],
      projectId:[-1,Validators.required],
      assignedById:[this.userservice.LoggedInUser.Id],
      assignedToId:1,
      taskStartDate:['',Validators.required],
      taskDueDate:['',Validators.required],
      taskAttachment:['',Validators.required],
      taskPriority:['',Validators.required],
      taskStatus:['',Validators.required]
    }) 
  

  }

  InitilizeEditTaskForm=function(data)
  {
    this.EditTaskForm=this.fb.group({
      taskId:[data.taskId],
      taskHeading:[data.taskHeading],
      departmentId:[2],
      taskDescription:[data.taskDescription],
      projectId:[data.projectId],
      assignedById:[this.userservice.LoggedInUser.Id],
      assignedToId:[1],
      taskStartDate:[data.taskStartDate],
      taskDueDate:[data.taskDueDate],
      taskAttachment:[data.taskAttachment],
      taskPriority:[data.taskPriority],
      taskStatus:[data.taskStatus]
    }) 
    }
  

  createTask()
  {
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

  viewIconClicked=function(id)
  {

      console.log("id"+id);
      $('#task-description').addClass('open-slide');
      $('body').addClass('gray-over');
      this.taskservice.getTaskForView(id).subscribe((res)=>
      {
        if (res.errorCode == 0) {
        this.viewTask = res.dataObj[0];
        console.log(this.viewTask);
      }
      else {

      }
      });
  }

  editSaveButtonClicked=function(data)
  {
    data.activateFlag=1;
    this.taskservice.editTask(data).subscribe((res) => {
      if (res.errorCode == 0) {
        this.InitilizeEditTaskForm(res.dataObj);
        for (let index = 0; index < this.TaskList.length; index++) {
          const element = this.TaskList[index];
          console.log("element.taskId"+element.taskId);
          console.log("data.taskId"+data.taskId);
          if(element.taskId==data.taskId)
          {
            this.TaskList[index]=res.dataObj;
          }
        }
        this.SearchResults = this.TaskList
        this.messageService.add({ severity: 'success', summary: 'Task updated', detail: 'Task created successfully' });
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


  ResetForm()
  {
    this.InitialiseCreateTaskForm();
  }

  DeleteTeamIcon(data)
  {
    this.taskservice.deteleTask(data).subscribe((res)=>
    {
      if(res.errorCode==0)
      {
       
      this.TaskList.splice(this.TaskList.indexOf(data),1);
      this.SearchResults = this.TaskList;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Team deleted' });
      }
      else{
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }
    ,(err)=>{
      console.log(err);
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
    });

  }

  editIconClicked(data)
  {
    console.log("snehan"+data)
    this.InitilizeEditTaskForm(data);
    $('#edit-task').addClass('open-slide');
    $('body').addClass('gray-over');
    console.log("edit icon "+data);
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
}
