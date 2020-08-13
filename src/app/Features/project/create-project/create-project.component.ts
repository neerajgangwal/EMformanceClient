import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import {ProjectService} from '../project.service'
import {MessageService} from 'primeng/api';
import {UserService} from '../../../../app/Services/user.service';
import {SearchService} from '../../../Services/search.service'

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(private httpsclient:HttpClient,
    private projectservice:ProjectService,
    private fb:FormBuilder,
    private messageservice:MessageService,
    private userService:UserService,
    private SearchService:SearchService
    ) { }

    CreateProjectForm:FormGroup;
    AddTeamForm:FormGroup;

    ProjectList:any[];
    SearchResults: any[];
    loading: true;
    FilterKey: string;
    EmployeeList:any[];
    TeamList:any[];
    DepartmentList:any[];
    LastProject;


  ngOnInit(): void {
    this.SearchService.SetSource(null);
    this.getDepartment();
    this.CreateProjectForm=this.fb.group({
      projectName:['',Validators.required],
      projectPriority:['',Validators.required],
      projectStatus:['',Validators.required],
      projectDescription:['',Validators.required],
      projectAttachment:['assets/Images/download.jpeg',Validators.required],
      projectStartDate:['',Validators.required],
      projectDueDate:['',Validators.required],
      departmentId:['',Validators.required],
      projectCreatedBy:[this.userService.LoggedInUser.Id]
    })



    this.projectservice.getTeamList().subscribe((res)=>
    {
      if(res.errorCode==0)
      {

        this.TeamList=res.dataObj;
        console.log(this.TeamList);
        this.SearchResults=this.TeamList;
        this.FilterKey = "teamName";
    }
    else{

    }
    });


  }



  public FilterData = function (event) {
    var temp = this.TeamList
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

  ResetForm=function()
  {
    this.CreateProjectForm.reset();
  }


  getDepartment=function()
  {
    this.projectservice.getDepartment().subscribe((res)=>
    {
      this.DepartmentList=res.dataObj;
    })
  }
  CreateProjectClicked=function(data)
  {
    console.log(data);
    this.projectservice.CreateProject(data).subscribe((res)=>
    {
      if(res.errorCode==0){
      console.log(res);
      console.log(res.dataObj);
      console.log("project created");
      this.LastProject=res.dataObj;
      this.messageservice.add({ severity: 'success', summary: 'project Created', detail: 'Via MessageService' });
      this.ResetForm();
      }
      else{
        this.messageservice.add({ severity: 'error', summary: 'Error', detail: res.errorMsg });
      }
    },(err)=>{
      this.messageservice.add({ severity: 'error', summary: 'Error', detail: 'Failed in api' });
    })
  }

  AddTeamToProject(team)
  {
    var tempTeam=team;
    tempTeam.projectId=this.LastProject.projectId;
    this.projectservice.updateTeamWithProject(tempTeam).subscribe((res)=>{
      if(res["errorCode"]==0)
      {
        console.log(this.GetIndexOfTeam(team.teamId));
        this.TeamList.splice(this.GetIndexOfTeam(team.teamId),1);
        this.SearchResults=this.TeamList
        this.messageservice.add({ severity: 'success', summary: 'Success', detail: 'Team added' });
      }
      else{
        this.messageservice.add({ severity: 'error', summary: 'Error', detail: res["errorMsg"] });
      }
    },(err)=>{
      this.messageservice.add({ severity: 'error', summary: 'Error', detail: 'Failed to add Team' });
    })
  }

  GetIndexOfTeam(teamId)
  {
    for (let index = 0; index < this.TeamList.length; index++) {
      const element = this.TeamList[index];
      if(element.teamId==teamId)
      {
        return index;
      }
    }
  }




}
