import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from './login.service';
import { LayoutService } from '../../Services/layout.service';
import { Router, NavigationEnd } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from '../../Entities/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private layoutService: LayoutService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    console.log('login');
    this.layoutService.UpdateLayout(false, false, false, false);
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit = function (data) {
    this.loginService.LoginFunction(data).subscribe(
      (res) => {
        if (res.errorCode == 0) {
          this.loginService.getEmployee(res.dataObj.email, res.dataObj.companyInfo).subscribe(
            (res2) => {
              if (res2.errorCode == 0) {
                this.loginService
                  .getPermissions(res.dataObj.companyInfo, res2.dataObj[0].employeeId)
                  .subscribe((res3) => {
                    if (res3.errorCode == 0) {

                      var user = new User();
                      user.Id = res2.dataObj[0].employeeId;
                      user.Name = res.dataObj.name;
                      user.EmailId = res.dataObj.email;
                      user.PortalName = res.dataObj.companyInfo;
                      user.Permissions = res3.dataObj.employeeElementMappingList;
                      console.log(res2);
                      console.log('test');
                      console.log(user);
                      localStorage.setItem(
                        'access_token',
                        JSON.stringify(user)
                      );
                      this.router.navigateByUrl('/dashboard');
                    }
                  });
              } else {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Get company failed',
                  detail: 'Via MessageService',
                });
              }
            },
            (err) => {
              this.messageService.add({
                severity: 'error',
                summary: 'Get company failed',
                detail: 'Via MessageService',
              });
            }
          );
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Login failed',
            detail: 'Via MessageService',
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
