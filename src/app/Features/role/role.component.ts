import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../Services/layout.service'

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  constructor(private layoutService:LayoutService) { }

  ngOnInit(): void {
    this.layoutService.UpdateLayout(true,true,true,false);
  }

}
