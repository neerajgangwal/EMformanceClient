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
  
  constructor(private taskservice:TaskService,
    private layoutservice:LayoutService,
    public searchservice:SearchService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.layoutservice.UpdateLayout(true,true,true,true);
    this.taskgroup=this.fb.group({
      taskHeading:['',Validators.required],
      taskDescription:['',Validators.required],
      taskStartDate:['',Validators.required],
      taskDueDate:['',Validators.required],
      taskAttachment:['']
      
    }) 

    this.taskservice.getTask().subscribe((res) => {
    this.TaskList=res.dataObj;

    console.log(this.TaskList);
    this.searchservice.SetSource(this.TaskList);
    this.searchservice.Key="taskHeading";
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
    console.log(data);
    this.taskservice.CreateTask(data).subscribe((res)=>{
      console.log(res);
      if(res.errorCode==0)
      {
        console.log("success");
        this.messageService.add({ severity: 'success', summary: 'Successfully created task', detail: 'Via MessageService' });
        this.taskgroup.reset();
       
      }
      else{
       this.messageService.add({ severity: 'error', summary: 'creation failed', detail: 'Via MessageService' });
      }
    })
  }

}
