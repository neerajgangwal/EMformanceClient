import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service'
import { LayoutService } from '../../../Services/layout.service'
import { MessageService } from 'primeng/api';
import { SearchService } from '../../../Services/search.service'

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  DepartmentForm: FormGroup;
  DepartmentList: any[];
  loading: true;

  constructor(private fb: FormBuilder,
    private AddDept: DepartmentService,
    private layoutservice: LayoutService,
    private messageService: MessageService,
    public searchService: SearchService) { }

  ngOnInit(): void {
    this.DepartmentForm = this.fb.group({
      departmentName: ['', Validators.required]
    });
   
    this.layoutservice.UpdateLayout(true, true, true, true);
    this.AddDept.getDepartment().subscribe((res) => {
      console.log(res);
      this.DepartmentList=res.dataObj;
      this.searchService.SetSource(res.dataObj);
      this.searchService.Key = "departmentName";
    });
  }

  ResetForm=function()
  {
    this.DepartmentForm.reset()
  }

  CreateButtonClicked = function (data) {
    //this.messageService.add({ severity: 'success', summary: 'Department Created', detail: 'Via MessageService' });
    this.loading = true;
    console.log(data);
    this.AddDept.addDepartment(data)
      .subscribe((res) => {
        console.log(res);
        this.DepartmentList.push(res.dataObj);
        this.searchService.SetSource(this.DepartmentList);
        this.messageService.add({ severity: 'success', summary: 'Department Created', detail: 'Via MessageService' });
        this.loading = false;
        this.ResetForm();
      });
  }

}
