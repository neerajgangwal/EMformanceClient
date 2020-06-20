import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  CompanyForm:FormGroup;
  LoginForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.CompanyForm=this.fb.group({
      CompanyName:['',Validators.required],
      PortalName:['',Validators.required],
      Industry:['',Validators.required], 
      Mobile:['',Validators.required],
    });
  }

  OnSubmit=function(data)
  {
    console.log(data);
  }

}
