import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import {LayoutService} from '../../Services/layout.service';
import {Router} from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private layoutService:LayoutService,private router:Router,private messageService :MessageService ) { }


  ngOnInit() {
    this.layoutService.UpdateLayout(false,false,false,false);
    this.LoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit = function (data) {
    this.loginService.TestFunction()
    console.log(data);
     this.loginService.LoginFunction(data).subscribe((res) => {
       if(res.errorCode==0)
       {
        this.router.navigateByUrl('/employee/list');
       }
       else{
        this.messageService.add({ severity: 'error', summary: 'Login failed', detail: 'Via MessageService' });
       }
      }, (error) => { console.log(error) });
  }
}
