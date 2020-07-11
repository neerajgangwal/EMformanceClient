import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,NavigationEnd,Router} from '@angular/router';
import {LayoutService} from './Services/layout.service';
import {SearchService} from './Services/search.service';
import {UserService} from './Services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  


  constructor(public searchService:SearchService,public layoutService:LayoutService,public userService:UserService ){}
  ngOnInit() {

  }
  title = 'EnformanceWeb';

  LogOutClicked=function(){
    this.userService.logout()
  }
}

