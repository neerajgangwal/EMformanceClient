import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../Services/layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.layoutservice.UpdateLayout(false, false, false, false)
    this.SignupForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  OnSubmit = function (data) {
    console.log(data);
    this.signupService.SignupFunction(data).subscribe((res) => {
      if (res.errorCode == 0) {
        this.ShowValidationMessage = true;
      }
      else {
        this.messageService.add({ severity: 'error', summary: res.errorMsg });
      }
    }, (error) => {
      this.messageService.add({ severity: 'error', summary: "Something went wrong, please try later" });
      console.log(error);
    })
  }

}
