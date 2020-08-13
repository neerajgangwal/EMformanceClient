import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { MessageService } from 'primeng/api';
import { UserService } from '../../../Services/user.service';



@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  ProjectsList: any[];
  TeamList: any[];
  ViewTeamMemberList: any[];
  TeamMemberList: any[] = [];
  SearchResults: any[];
  loading: true;
  employeeArray: any[] = [];
  testList: any[] = [];
  FilterKey: string;
  editTeam:any[]=[];


  EmployeeList: any[];
  CreateTeamForm: FormGroup;
  AddTeamForm: FormGroup;
  EditTeamForm:FormGroup;

  teamgroup: FormGroup;
  constructor(
    private teamservice: TeamService,
    private messageService: MessageService,
    private fb: FormBuilder,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.teamservice.getTeam().subscribe((res) => {
      if (res.errorCode == 0) {
        this.TeamList = res.dataObj;
        console.log(this.TeamList);
        this.SearchResults = this.TeamList;
        this.FilterKey = "teamName";
      }
      else {

      }
    })

    $('.slide-close').on('click', function () {
      $(this).parent().removeClass('open-slide');
      $('body').removeClass('gray-over');
    });

    this.teamservice.getProjects()
      .subscribe(res => {
        if (res.errorCode == 0) {
          this.ProjectsList = res.dataObj;
        }
        else {

        }
      });
  }

  InitilizeCreateTeamForm = function () {
    this.CreateTeamForm = this.fb.group({
      projectId: -1,
      teamName: ['', Validators.required],
      departmentId: [1,Validators.required],
      teamCreatedBy: [this.userService.LoggedInUser.Id],
      teamUpdatedBy: [this.userService.LoggedInUser.Id]
    })
  }

  InitilizeAddTeamForm = function (teamId) {
    this.AddTeamForm = this.fb.group({
      EmployeeId: ['', Validators.required],
      TeamId: [teamId, Validators.required]
    })
    this.TeamMemberList = [];
  }

  InitilizeEditTeamForm=function(data)
  {
      this.EditTeamForm = this.fb.group({
      teamId:[data.teamId],
      projectId: [data.projectId],
      teamName: [data.teamName,Validators.required],
      departmentId: [1],
      teamCreatedBy: [this.userService.LoggedInUser.Id],
      teamUpdatedBy: [this.userService.LoggedInUser.Id],
    })
  }

  ResetForm = function () {
    this.InitilizeCreateTeamForm();
  }

  CreateTeamButtonClicked() {
    this.InitilizeCreateTeamForm();
    $('#task-description').addClass('open-slide');
    $('body').addClass('gray-over');
  }

  getEmployeeFromList = function () {
    this.teamservice.getEmployeeData().subscribe((res) => {
      if (res.errorCode == 0) {
        this.EmployeeList = res.dataObj;
        console.log("---------------");
        console.log(this.EmployeeList);
        console.log("---------------");
        console.log(this.ViewTeamMemberList);
        console.log("---------------");

        this.ViewTeamMemberList.forEach((element) => {
          for(let employee of this.EmployeeList)
          {
            if (element.employeeId == employee.employee.employeeId) {
              element.employeeName = employee.employee.employeeFname + employee.employee.employeeMname;
              element.employeeEmail = employee.employee.employeeEmail;
              break;
            }
          }
        });
        console.log(this.ViewTeamMemberList);
      }
      else {

      }
    })
  }

  CreateButtonClicked = function (data) {

    console.log(data);
    this.teamservice.createTeam(data).subscribe((res) => {
      if (res.errorCode == 0) {
        console.log(res);
        this.TeamList.push(res.dataObj);
        this.SearchResults = this.TeamList
        this.messageService.add({ severity: 'success', summary: 'Team Created', detail: 'Team created successfully' });
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

  SaveTeamMembers(data) {
    console.log(data);
    var TeamMappingArray = [];
    this.TeamMemberList.forEach((element) => {
      TeamMappingArray.push({
        teamId: data.TeamId,
        employeeId: element.employee.employeeId,
        activateFlag: 1
      })
    });
    this.teamservice.addTeamMember(TeamMappingArray).subscribe((res) => {
      if (res.errorCode == 0) {
        this.messageService.add({ severity: 'success', summary: 'Team Created', detail: 'Via MessageService' });
        this.TeamMemberList = [];
        this.AddTeamForm.reset();
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.errorMsg });
      }
    }, (err) => {
      console.log(err);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Failed please try again" });
    });
  }

  AddMemberToTeamList(id) {
    console.log(id);
    for(let member of this.TeamMemberList)
    {
      if (member.employee.employeeId == id) {
        return;
      }
    }
    this.EmployeeList.forEach((element) => {

      if (element.employee.employeeId == id) {
        this.TeamMemberList.push(element);
      }
    })
  }

  RemoveMemberFromTeamList(element) {
    this.TeamMemberList.splice(this.TeamMemberList.indexOf(element), 1);
  }

  ViewIconClicked(id) {
    $('#add-task').addClass('open-slide');
    $('body').addClass('gray-over');
    console.log(id);
    this.teamservice.getTeamMember(id).subscribe((res) => {
      if (res.errorCode == 0) {
        this.ViewTeamMemberList = res.dataObj;
        console.log(this.ViewTeamMemberList);
        this.getEmployeeFromList();
      }
      else {

      }
    })

  }

   editIconClicked(data)
  {
    this.InitilizeEditTeamForm(data);
    $('#edit-team').addClass('open-slide');
    $('body').addClass('gray-over');
    console.log("edit icon "+data);
  }

  editSaveButtonClicked=function(data)
  {
    data.activateFlag=1;
    console.log("save"+data.projectId);
    this.teamservice.updateTeam(data).subscribe((res) => {
      if (res.errorCode == 0) {
        this.InitilizeEditTeamForm(res.dataObj);
        for (let index = 0; index < this.TeamList.length; index++) {
          const element = this.TeamList[index];
          console.log("element.teamId"+element.teamId);
          console.log("data.teamId"+data.teamId);
          if(element.teamId==data.teamId)
          {
            this.TeamList[index]=res.dataObj;
          }
        }
        this.SearchResults = this.TeamList
        this.messageService.add({ severity: 'success', summary: 'Team updated', detail: 'Team created successfully' });
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

  AddTeamIcon(teamId) {
    $('#addteam-member').addClass('open-slide');
    $('body').addClass('gray-over');
    console.log("test");
    this.teamservice.getEmployeeData().subscribe((res) => {
      if (res.errorCode == 0) {
        console.log(res.dataObj);
        this.EmployeeList = res.dataObj;
        this.InitilizeAddTeamForm(teamId);
      }
      else {
        console.log(res)
      }


    },
      (err) => { console.log("outside error") });

  }

  DeleteTeamIcon(data)
  {
    this.teamservice.deleteTeam(data).subscribe((res)=>
    {
      if(res.errorCode==0)
      {
      this.TeamList.splice(this.TeamList.indexOf(data),1);
      this.SearchResults = this.TeamList;
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
}
