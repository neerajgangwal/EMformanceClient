import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../../Services/layout.service';
import { SearchService } from '../../../Services/search.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  RoleList: any[];
  SearchResults: any[];
  loading: true;
  FilterKey: string;

  constructor(private roleservice: RoleService) { }

  ngOnInit(): void {
    this.roleservice.GetDesignations().subscribe((res) => {
      this.RoleList = res.dataObj;

      console.log(this.RoleList);
      this.SearchResults = this.RoleList;
      this.FilterKey = "designationName";
    });
  }

  public FilterData = function (event) {
    var temp = this.RoleList
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
