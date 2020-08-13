import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service'
import { LayoutService } from '../../../Services/layout.service'
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/Services/user.service';
import * as $ from 'jquery';


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
  EditForm:FormGroup;
  DepartmentsList:any[]=[{"departmentName":"IT Services"},
  {"departmentName":"Human Resource"},
  {"departmentName":"Finance"},
  {"departmentName":"Production"},
  {"departmentName":"Security"},
  {"departmentName":"Talent Acquisition"},
  {"departmentName":"Marketing"},
  {"departmentName":"Sales"},
  {"departmentName":"Business Development"}]

  FilteredDepartmentsList:any[];

  constructor(private fb: FormBuilder,
    private AddDept: DepartmentService,
    private DeleteDept: DepartmentService,
    private messageService: MessageService,
    public userService:UserService
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

      $('.slide-close').on('click', function () {
        $(this).parent().removeClass('open-slide');
        $('body').removeClass('gray-over');
      });
    });

  }



  initialiseEditForm=function(data)
  {
    this.EditForm=this.fb.group({
      departmentId:[data.departmentId,Validators.required],
      departmentName: [data.departmentName, Validators.required]
    })
    console.log("departmentid "+data.departmentId);
    console.log("departmentName "+data.departmentName);



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
        if(res.errorCode==0)
        {
        this.DepartmentList.push(res.dataObj);
        this.SearchResults = this.DepartmentList
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Department Created' });
        this.loading = false;
        this.ResetForm();
        }
        else{
          this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
        }
      },(err)=>{
        console.log(err)
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something failed in api' });

      });
  }

  editIconClicked=function(data)
  {
    this.initialiseEditForm(data);
    console.log("data "+data)
    $('#edit-team').addClass('open-slide');
    $('body').addClass('gray-over');

  }
  editSaveButtonClicked=function(data)
  {
    data.activateFlag=1;
    console.log("save"+data.projectId);
    this.AddDept.updateDepartment(data).subscribe((res) => {
      if (res.errorCode == 0) {
        this.initialiseEditForm(res.dataObj);
        for (let index = 0; index < this.DepartmentList.length; index++) {
          const element = this.DepartmentList[index];
          console.log("element.departmentId"+element.departmentId);
          console.log("data.departmentId"+data.departmentId);
          if(element.departmentId==data.departmentId)
          {
            this.DepartmentList[index]=res.dataObj;
          }
        }
        this.SearchResults = this.DepartmentList
        this.messageService.add({ severity: 'success', summary: 'department updated', detail: 'department edited successfully' });
        this.ResetForm();
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }, (error) => {
      console.log(error);
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: 'Something went wrong please try after some time' });
    });
  }

  deleteIconClicked = function (data) {
    this.DeleteDept.deleteDepartment(data.departmentId).subscribe((res => {
      if(res.errorCode==0)
      {
      this.DepartmentList.splice(this.DepartmentList.indexOf(data), 1);
      this.SearchResults = this.DepartmentList;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Department deleted' });
      }
      else{
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }
    ),(err)=>{
      console.log(err);
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
    });
  }

  public FilterData = function (event) {
    console.log(this.DepartmentList)
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

  FilterDepartments(event) {
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.DepartmentsList.length; i++) {
        let department = this.DepartmentsList[i];
        if (department.departmentName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(department.departmentName);
        }
    }

    this.FilteredDepartmentsList = filtered;
}


}
