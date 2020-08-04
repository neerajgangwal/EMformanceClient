import { Component, OnInit } from '@angular/core';
import {AdminRoleService} from '../admin-role.service';

@Component({
  selector: 'app-admin-role-list',
  templateUrl: './admin-role-list.component.html',
  styleUrls: ['./admin-role-list.component.css']
})
export class AdminRoleListComponent implements OnInit {

  RoleList: any[];
  SearchResults: any[];
  loading: true;
  FilterKey: string;

  constructor(private AdminRoleService: AdminRoleService) { }

  ngOnInit(): void {
    this.AdminRoleService.GetDesignations().subscribe((res) => {
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
