import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, NavigationEnd, Router } from '@angular/router';
import { LayoutService } from './Services/layout.service';
import { SearchService } from './Services/search.service';
import { UserService } from './Services/user.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public Title: string;
  public ShowHeader: boolean;
  public ShowFooter: boolean;
  public ShowNavBar: boolean;
  public ShowSearchBox: boolean;
  public ShowDashboardIcons: boolean;
  constructor(public searchService: SearchService, public layoutService: LayoutService, public userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof ActivationStart)).subscribe(event => {
      console.log(event);
      var routeData = event['snapshot'].data;
      this.Title = routeData.Title;
      this.ShowHeader = routeData.ShowHeader;
      this.ShowNavBar = routeData.ShowNavBar;
      this.ShowDashboardIcons = routeData.ShowDashboardIcons;
    });
  }
  title = 'EnformanceWeb';

  LogOutClicked = function () {
    this.userService.logout()
  }
}

