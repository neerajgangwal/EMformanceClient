import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { LayoutService } from '../../../Services/layout.service';
import { SearchService } from '../../../Services/search.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  EmployeeList: any[];
  SearchResults: any[];
  loading: true;
  FilterKey: string;

  constructor(private employeeService: EmployeeService,
    private layoutservice: LayoutService,
    public searchSerrvice: SearchService) { }

  ngOnInit(): void {
    this.searchSerrvice.SetSource(null);
    this.layoutservice.UpdateLayout(true, true, true, true);
    this.employeeService.GetEmployeeData().subscribe((res) => {
      this.EmployeeList = res.dataObj;
      this.EmployeeList.forEach((element) => {
        element.FullName = element.employee.employeeFname + " " + element.employee.employeeMname;
      })
      console.log(this.EmployeeList);
      this.SearchResults=this.EmployeeList;
      this.FilterKey = "FullName";
    });

  }

  public FilterData = function (event) {
    var temp = this.EmployeeList
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
