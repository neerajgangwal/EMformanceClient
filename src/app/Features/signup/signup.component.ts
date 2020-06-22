import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../Services/layout.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {SignupService} from './signup.service';
import {Router} from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  SignupForm:FormGroup;
  constructor(private layoutservice:LayoutService,private fb:FormBuilder,private signupService:SignupService
    ,private router:Router
    ,private messageService:MessageService
    ) { }

  ngOnInit() {
    this.layoutservice.UpdateLayout(false,false,false,false)
    this.SignupForm=this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required]
    })
  }

  OnSubmit=function(data)
  {
    console.log(data);
    this.signupService.SignupFunction(data).subscribe((res)=>{
      if(res.errorCode==0)
      {
       this.router.navigateByUrl('/company/update');
      }
      else{
       this.messageService.add({ severity: 'error', summary: 'signup failed', detail: 'Via MessageService' });
      }
    },(error)=>{
      console.log(error);
    })
  }

}
