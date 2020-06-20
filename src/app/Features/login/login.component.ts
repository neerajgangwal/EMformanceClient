import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import {LayoutService} from '../../Services/layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService,private layoutService:LayoutService ) { }


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
     this.loginService.LoginFunction(data).subscribe((res) => { console.log(res) }, (error) => { console.log(error) });
  }
}
