import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public ShowHeader: boolean;
  public ShowFooter: boolean;
  public ShowNavBar: boolean;
  public ShowSearchBox: boolean;

  constructor() {
    this.ShowHeader = false;
    this.ShowFooter = false;
    this.ShowNavBar = false;
    this.ShowSearchBox = false;
  }

  UpdateLayout = function (showHeader, showFooter, showNavBar, showSearchBox) {
    this.ShowHeader = showHeader;
    this.ShowFooter = showFooter;
    this.ShowNavBar = showNavBar;
    this.ShowSearchBox = showSearchBox;
  }
}
