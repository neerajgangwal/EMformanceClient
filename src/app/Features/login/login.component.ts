import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { LayoutService } from '../../Services/layout.service';
import { Router, NavigationEnd } from '@angular/router';
import { MessageService } from 'primeng/api';
import {User} from '../../Entities/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private layoutService: LayoutService, private router: Router, private messageService: MessageService) { 
      this.router.events.subscribe(
        (event) => {
               if (event instanceof NavigationEnd) {
                 this.ngOnInit();
               }
        });
    }


  ngOnInit() {
    console.log("login");
    this.layoutService.UpdateLayout(false, false, false, false);
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit = function (data) {
    this.loginService.LoginFunction(data).subscribe((res) => {
      if (res.errorCode == 0) {
        var user=new User();
        user.Id=res.dataObj.userId;
        user.Name=res.dataObj.name;
        user.EmailId=res.dataObj.email;
        localStorage.setItem("access_token", JSON.stringify(user));
        this.router.navigateByUrl('/department/create');
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Login failed', detail: 'Via MessageService' });
      }
    }, (error) => { console.log(error) });
  }
}
