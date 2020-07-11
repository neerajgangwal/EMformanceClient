import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../../Services/layout.service';
import {GoalsService} from '../goals.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-my-goal',
  templateUrl: './my-goal.component.html',
  styleUrls: ['./my-goal.component.css']
})
export class MyGoalComponent implements OnInit {

  goallist:any[];
  goalgroup:FormGroup;
  constructor(
    private goalservice:GoalsService,
    private layoutservice:LayoutService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {

    this.layoutservice.UpdateLayout(true,true,true,true);
    this.goalgroup=this.fb.group({
      goalHeading:['',Validators.required],
      goalDescription:['',Validators.required],
      goalAttachment:['',Validators.required],
      goalStartDate:['',Validators.required],
      goalEndDate:['',Validators.required]
    })

    this.goalservice.getGoal().subscribe((res)=>{
      this.goallist=res.dataObj;
      console.log(this.goallist);
    })

    $('.team').on('click', function() {
      $('#add-task').addClass('open-slide');
      $('body').addClass('gray-over');
  });
    
  $('.task-card p').on('click', function() {
      $('#task-description').addClass('open-slide');
      $('body').addClass('gray-over');
  });	
  
  $('.slide-close').on('click', function() {
      $(this).parent().removeClass('open-slide');
      $('body').removeClass('gray-over');
  });

  }

  CreateGoal = function(data) {
    console.log(data);
    this.goalservice.CreateGoal(data).subscribe((res)=>{
      console.log(res);
      if(res.errorCode==0)
      {
        console.log("success");
        this.messageService.add({ severity: 'success', summary: 'Successfully created goal', detail: 'Via MessageService' });
        this.goalgroup.reset();
       
      }
      else{
       this.messageService.add({ severity: 'error', summary: 'creation failed', detail: 'Via MessageService' });
      }
    })
}
}
