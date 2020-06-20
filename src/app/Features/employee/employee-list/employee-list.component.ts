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
  constructor(private employeeService: EmployeeService,
    private layoutservice: LayoutService,
    public searchSerrvice: SearchService) { }

  ngOnInit(): void {
    this.layoutservice.UpdateLayout(true, true, true, true);
    this.employeeService.GetEmployeeData().subscribe((res) => {
      this.EmployeeList = res.dataObj;
      this.EmployeeList.forEach((element) => {
        element.FullName = element.employee.employeeFname + " " + element.employee.employeeMname;
      })
      console.log(this.EmployeeList);
      this.searchSerrvice.SetSource(this.EmployeeList);
      this.searchSerrvice.Key = "FullName";
    });

  }


}
