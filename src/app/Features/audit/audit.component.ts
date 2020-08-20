import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {AuditService} from './audit.service';
import {SearchService} from '../../Services/search.service';



@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  auditList:any[];
  employeeList:any[];
  SearchResults: any[];
  FilterKey: string;

  employeeData;

  constructor(private auditService:AuditService,private searchService:SearchService) { }

  ngOnInit(): void {

    this.searchService.SetSource(null);
    this.auditService.getAuditData().subscribe((res)=>
    {
      var id= res.dataObj.createdBy;
      if(res.errorCode==0){
          this.auditList=res.dataObj;
          this.SearchResults=this.auditList;
          this.FilterKey = "employeeName";
      }
      else{

      }
    })


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
