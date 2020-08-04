import { Component, OnInit } from '@angular/core';
import { AdminUserListService } from './admin-user-list.service';
import { SearchService } from '../../../Services/search.service'

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  UserList: any[];
  SearchResults: any[];
  Filter: string;

  constructor(private userservice: AdminUserListService) { }

  ngOnInit(): void {
    this.userservice.getUserList().subscribe((res) => {
      this.UserList = res.dataObj;
      console.log("test123");
      this.SearchResults = this.UserList;
      this.Filter ="companyName";
      console.log(this.Filter);
    })
  }
  
  public FilterData = function (event) {
    var temp = this.UserList
    var data = event.target.value;
    console.log(data);
    console.log(temp);
    console.log(this.Filter);

    this.SearchResults = temp.filter(item => {
      console.log(item);
      console.log(item[this.Filter]);
      console.log(item[this.Filter].toLowerCase().startsWith(data.toLowerCase()));
      return item[this.Filter].toLowerCase().includes(data.toLowerCase());
    })
  }

}
