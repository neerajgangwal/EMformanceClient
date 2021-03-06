import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../Services/layout.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router, NavigationEnd } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm: FormGroup;
  ShowValidationMessage: boolean = false;
  ShowCompanyValidationMessage: boolean = false;
  constructor(private layoutservice: LayoutService, private fb: FormBuilder, private signupService: SignupService
    , private router: Router
    , private messageService: MessageService
  ) {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd) {
          this.ngOnInit();
        }
      });

  }

  ngOnInit() {
    this.SignupForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', Validators.required],
      companyWebsite:[''],
      portalName: ['', Validators.required],
      industryType: ['', Validators.required],
      companySize:['', Validators.required],
      adminMobile: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+')])],
      termsCheckBox: [false]
    });
  }

  OnSubmit = function (data) {



    console.log(data.portalName);

    var userData = {
      userRole: "ADMIN",
      companyInfo: data.portalName,
      name: data.name,
      password: data.password,
      email: data.email
    }

    this.signupService.SignupFunction(userData).subscribe((res) => {
      if (res.errorCode == 0) {
        var company = {
          companyName: data.companyName,
          portalName: data.portalName,
          industryType: data.industryType,
          adminMobile: data.adminMobile,
          adminEmail: data.email,
          companyDomain: '',
          contactPerson: res.dataObj.userId,
          apiURLPrefix: data.companyWebsite,
          companySize:data.companySize
        }

        this.signupService.addCompany(company).subscribe((res) => {
          if (res.errorCode == 0) {
            this.messageService.add({ severity: 'success', summary: "Comapny added successfully" });
            this.ShowValidationMessage = true;
          }
          else {
            this.messageService.add({ severity: 'error', summary: res.errorMsg });
          }
        }, (err) => {
          this.messageService.add({ severity: 'error', summary: "Something went wrong, please try later" });
        })
      }
      else {
        this.messageService.add({ severity: 'error', summary: res.errorMsg });
      }
    }, (error) => {
      this.messageService.add({ severity: 'error', summary: "Something went wrong, please try later" });
      console.log(error);
    })
  }

  checkPortalName(data)
  {
    this.signupService.CheckPortalName(data).subscribe((res)=>{
      if(res.errorCode==0)
      {
        this.ShowCompanyValidationMessage=false;
      }
      else{
          this.ShowCompanyValidationMessage=true;
      }
    }),
    (err)=>{

    }
  }

}
