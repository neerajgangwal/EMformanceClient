import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  CompanyForm: FormGroup;
  LoginForm: FormGroup;
  constructor(private fb: FormBuilder, private companyService: CompanyService,private router:Router) { }

  ngOnInit() {
    this.CompanyForm = this.fb.group({
      companyName: ['', Validators.required],
      portalName: ['', Validators.required],
      industryType: ['', Validators.required],
      adminMobile: ['', Validators.required],
      adminEmail:[''],
      companyDomain:[''],
      contactPerson:[''],
      apiURLPrefix:['']
    }); 
  }

  OnSubmit = function (data) {
    console.log(data);
    this.companyService.addCompany(data).subscribe((res) => {
      console.log(res);
      if(res.errorCode==0)
      {
       this.router.navigateByUrl('/department/create');
      }
      else{
       this.messageService.add({ severity: 'error', summary: 'company update failed', detail: 'Via MessageService' });
      }
    }, (error) => {
      console.log(error);
    });
  }

}
