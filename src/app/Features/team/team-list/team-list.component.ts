import { Component, OnInit } from '@angular/core';
import {TeamService} from '../team.service'; 
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {LayoutService} from '../../../Services/layout.service';
import {SearchService} from '../../../Services/search.service'

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  TeamList:any[];
  teamgroup:FormGroup;
  constructor(
    private teamservice:TeamService,
    private fb:FormBuilder,
    private layoutservice:LayoutService,
    public searchservice:SearchService
  ) { }

  ngOnInit(): void {
    this.layoutservice.UpdateLayout(true,true,true,true);
    this.teamservice.getTeam().subscribe((res) =>{
      this.TeamList=res.dataObj;

      console.log(this.TeamList);
      this.searchservice.SetSource(this.TeamList);
      this.searchservice.Key="teamName";
    })
  }


}
