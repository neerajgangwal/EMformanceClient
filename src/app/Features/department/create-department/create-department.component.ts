import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service'
import { LayoutService } from '../../../Services/layout.service'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  DepartmentForm: FormGroup;
  DepartmentList: any[];
  SearchResults: any[];
  loading: true;
  FilterKey: string;

  constructor(private fb: FormBuilder,
    private AddDept: DepartmentService,
    private messageService: MessageService,
  ) { } 

  ngOnInit(): void {
    this.DepartmentForm = this.fb.group({
      departmentName: ['', Validators.required]
    });
    this.AddDept.getDepartment().subscribe((res) => {
      console.log(res);
      this.DepartmentList = res.dataObj;
      this.SearchResults = res.dataObj;
      this.FilterKey = "departmentName";
    });
  }

  ResetForm = function () {
    this.DepartmentForm.reset()
  }

  CreateButtonClicked = function (data) {
    this.loading = true;
    console.log(data);
    this.AddDept.addDepartment(data)
      .subscribe((res) => {
        console.log(res);
        this.DepartmentList.push(res.dataObj);
        this.SearchResults=this.DepartmentList
        this.messageService.add({ severity: 'success', summary: 'Department Created', detail: 'Via MessageService' });
        this.loading = false;
        this.ResetForm();
      });
  }

  public FilterData = function (event) {
    var temp = this.DepartmentList
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
