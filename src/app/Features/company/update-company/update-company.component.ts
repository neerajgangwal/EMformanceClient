import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { emit } from 'process';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  CompanyForm: FormGroup;
  LoginForm: FormGroup;
  constructor(private fb: FormBuilder, private companyService: CompanyService, private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(
      (event) => {
             if (event instanceof NavigationEnd) {
               this.ngOnInit();
             }
      });
  
   }

  ngOnInit() {

    this.route.queryParamMap.subscribe(params => {
      var id = params.get("userId");
      var email = params.get("emailId");
      this.CompanyForm = this.fb.group({
        companyName: ['', Validators.required],
        portalName: ['', Validators.required],
        industryType: ['', Validators.required],
        adminMobile: ['', Validators.compose([Validators.required, Validators.minLength(10),Validators.pattern('[0-9]+')])],
        adminEmail: [email],
        companyDomain: [''],
        contactPerson: [id],
        apiURLPrefix: ['']
      });
    });
  }

  OnSubmit = function (data) {
    console.log(data);
    this.companyService.addCompany(data).subscribe((res) => {
      console.log(res);
      if (res.errorCode == 0) {
        this.router.navigateByUrl('/login');
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'company update failed', detail: 'Via MessageService' });
      }
    }, (error) => {
      console.log(error);
    });
  }

}
