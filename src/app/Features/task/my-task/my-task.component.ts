import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {LayoutService} from '../../../Services/layout.service';
import {SearchService} from '../../../Services/search.service';
import {FormBuilder,FormGroup,Validators, RequiredValidator} from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  TaskList:any[];
  taskgroup:FormGroup;
  SearchResults: any[];
  loading: true;
  FilterKey: string;
  
  constructor(private taskservice:TaskService,
    private layoutservice:LayoutService,
    public searchservice:SearchService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchservice.SetSource(null);
    this.layoutservice.UpdateLayout(true,true,true,true);
    this.taskgroup=this.fb.group({
      taskHeading:['',Validators.required],
      departmentId:['',Validators.required],
      taskDescription:['',Validators.required],
      projectId:['',Validators.required],
      assignedById:['',Validators.required],
      assignedToId:['',Validators.required],
      taskStartDate:['',Validators.required],
      taskDueDate:['',Validators.required],
      taskAttachment:['',Validators.required],
      taskPriority:['',Validators.required],
      taskStatus:['',Validators.required]
      
    }) 

    this.taskservice.getTask().subscribe((res) => {
    this.TaskList=res.dataObj;

    console.log(this.TaskList);
    this.SearchResults=this.TaskList;
    this.FilterKey="taskHeading";
    })

    $('.team').on('click', function() {
      $('#add-task').addClass('open-slide');
      $('body').addClass('gray-over');
  });
  
  $('.slide-close').on('click', function() {
      $(this).parent().removeClass('open-slide');
      $('body').removeClass('gray-over');
  });
  }

  CreateTask = function(data) {
    console.log("data"+data);
    this.taskservice.CreateTask(data).subscribe((res)=>{
      console.log("res"+res);
      if(res.errorCode==0)
      {
        console.log("success");
        this.TaskList.push(res.dataObj);
        console.log("task list"+this.TaskList);
        this.messageService.add({ severity: 'success', summary: 'Successfully created task', detail: 'Via MessageService' });
        this.taskgroup.reset();
       
      }
      else{
       this.messageService.add({ severity: 'error', summary: 'creation failed', detail: 'Via MessageService' });
      }
    })
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
