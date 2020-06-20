import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../Services/layout.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private layoutservice:LayoutService) { }

  ngOnInit() {
    this.layoutservice.UpdateLayout(false,false,false,false)
  }

}
