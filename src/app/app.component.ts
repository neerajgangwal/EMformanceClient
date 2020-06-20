import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,NavigationEnd,Router} from '@angular/router';
import {LayoutService} from './Services/layout.service';
import {SearchService} from './Services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  


  constructor(public searchService:SearchService,public layoutService:LayoutService ){}
  ngOnInit() {

  }
  title = 'EnformanceWeb';
}

