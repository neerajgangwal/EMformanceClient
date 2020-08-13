import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { LayoutService } from '../../../Services/layout.service';
import { SearchService } from '../../../Services/search.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import {UserService} from '../../../Services/user.service'

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
    public searchSerrvice: SearchService,
    private messageService: MessageService,
    public  userService:UserService,
    private router:Router
    ) { }

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

  deleteIconClicked=function(data)
  {
    console.log("some data "+data.employee.employeeId);
    console.log("id "+data.employeeId);
    this.employeeService.deleteEmployee(data.employee.employeeId).subscribe((res)=>
    {
      if(res.errorCode==0)
      {
      this.EmployeeList.splice(this.EmployeeList.indexOf(data), 1);

      this.SearchResults = this.EmployeeList;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee deleted' });
      }
      else{
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }
    ,(err)=>{
      console.log(err);
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
    })
  }




  editEmployeeIconClicked(id)
  {
    this.router.navigate(['employee', 'edit'], { queryParams: { 'id': id } });
  }

  viewIconClicked(id)
  {
    this.router.navigate(['employee', 'view'], { queryParams: { 'id': id } });
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
