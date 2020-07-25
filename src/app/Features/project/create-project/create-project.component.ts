import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import {ProjectService} from '../project.service'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(private httpsclient:HttpClient,
    private projectservice:ProjectService,
    private fb:FormBuilder,
    messageservice:MessageService
    ) { }

    CreateProjectForm:FormGroup;
    AddTeamForm:FormGroup;

    ProjectList:any[];
    searchResults:any[];


  ngOnInit(): void {
    this.CreateProjectForm=this.fb.group({
      projectName:['',Validators.required],
      projectPriority:['',Validators.required],
      projectDescription:['',Validators.required],
      projectAttachment:['',Validators.required],
      projectStartDate:['',Validators.required],
      projectDueDate:['',Validators.required]
    })
    
  }

  InitialiseAddTeamForm()
  {
    this.AddTeamForm=this.fb.group({

      
    })
  }

  ResetForm=function()
  {
    this.CreateProjectForm.reset();
  }

  CreateProjectClicked=function(data)
  {
    console.log(data);
    this.projectservice.CreateProject(data).subscribe((res)=>
    {
      if(res.errorCode==0){
      
      console.log(res);
      this.ProjectList.push(res.dataObj);
      this.searchResults=this.ProjectList;
      this.messageservice.add({ severity: 'success', summary: 'project Created', detail: 'Via MessageService' });
      this.ResetForm();
      }
      else{
        
      }
    })
  }

}
