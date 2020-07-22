import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { MessageService } from 'primeng/api';
import {UserService} from '../../../Services/user.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  ProjectsList: any[];
  TeamList: any[];
  TeamMemberList: any[] = [];
  SearchResults: any[];
  loading: true;
  FilterKey: string;

  EmployeeList: any[];



  CreateTeamForm: FormGroup;
  AddTeamForm: FormGroup;

  teamgroup: FormGroup;
  constructor(
    private teamservice: TeamService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private userService:UserService
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
  ResetForm = function () {
    this.CreateTeamForm.reset();
    this.CreateTeamForm.patchValue({
      projectId:''
    })
  }

  InitilizeCreateTeamForm = function () {
    this.CreateTeamForm = this.fb.group({
      projectId: ['', Validators.required],
      teamName: ['', Validators.required],
      departmentId: [1],
      teamCreatedBy:[this.userService.LoggedInUser.Id],
      teamUpdatedBy:[this.userService.LoggedInUser.Id]
    })
  }


  InitilizeViewTeamForm = function () {
    this.CreateTeamForm = this.fb.group({
      ProjectId: ['', Validators.required],
      TeamName: ['', Validators.required]
    })
  }

  InitilizeAddTeamForm = function (teamId) {
    this.AddTeamForm = this.fb.group({
      EmployeeId: ['', Validators.required],
      TeamId: [teamId, Validators.required]
    })
    this.TeamMemberList=[];
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

  ViewClicked = function (data) {
    this.teamservice.getTeamMember().subscribe((res) => {
      this.TeamMemberList = res.dataObj;
      console.log.apply(this.TeamMemberList);
    });
  }

  AddTeamMemberClicked(data) {
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
        this.TeamMemberList=[];
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
    this.EmployeeList.forEach((element) => {

      if (element.employee.employeeId == id) {
        this.TeamMemberList.push(element);
      }
    })
  }

  RemoveMemberFromTeamList(element) {
    this.TeamMemberList.splice(this.TeamMemberList.indexOf(element), 1);
  }

  CreateTeamButtonClicked() {
    this.InitilizeCreateTeamForm();
    $('#task-description').addClass('open-slide');
    $('body').addClass('gray-over');
  }

  TeamMemberViewClicked() {
    $('#add-task').addClass('open-slide');
    $('body').addClass('gray-over');
  }

  AddTeamMember(teamId) {
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
}
