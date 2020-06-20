import { Component, OnInit } from '@angular/core';
import {RoleService} from '../role.service';
import {LayoutService} from '../../../Services/layout.service';
@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  constructor(private roleService:RoleService,private layoutService:LayoutService) { }

  ngOnInit(): void {

    this.layoutService.UpdateLayout(true,true,true,false);
  }

}
