import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../Services/layout.service'
import { EmployeeService } from '../employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  EmployeeForm: FormGroup
  DepartmentList: any[];
  DesignationList: any[];
  constructor(private layoutService: LayoutService, private employeeService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.layoutService.UpdateLayout(true, true, true, false);
    this.EmployeeForm = this.fb.group({

      designationId: ['', Validators.required],
      departmentId: ['', Validators.required],
      employeeFname: ['', Validators.required],
      employeeMname: ['', Validators.required],
      employeeEmail: ['', Validators.required],
      employeePassword: ['', Validators.required],
      employeeMobileNo: ['', Validators.required],
      employeeProfileImg: ['', Validators.required],
      gender: ['Male', Validators.required]

    })
    this.employeeService.GetDepartments().subscribe((res) => {
      this.DepartmentList = res.dataObj;
      console.log(this.DepartmentList);
    })
  }

  SelectDepartmentChanged = function (id) {
    this.employeeService.GetRolesForDepartmentId(id).subscribe((res) => {
      this.EmployeeForm.patchValue({
        designationId: ''
      });
      this.DesignationList = res.dataObj;
      console.log(this.DesignationList);

    });

  }

  CreateEmployee = function (data) {
    console.log(data);
    this.employeeService.CreateEmployee(data).subscribe((res)=>{
      console.log(res);
    })
  }

  RadioButtonClick = function (data) {
    this.EmployeeForm.patchValue({
      gender: data
    })
  }


}
