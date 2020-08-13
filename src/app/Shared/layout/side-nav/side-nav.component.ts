import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserService } from 'src/app/Services/user.service';
import {ElementsEnum} from '../../../Entities/ElementsEnum';
import {OperationsEnum} from '../../../Entities/OperationsEnum';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit() {
    $(document).ready(function () {
      $('.navbar-sidemenu li a.nav-link').on('click', function () {
        $('.collapse').slideUp();
        $(this).toggleClass('subOpen');
        $(this).next('.collapse').slideDown();
        console.log("Clicked");
        return false;
      });

      $('.slide-close').on('click', function() {
        $(this).parent().removeClass('open-slide');
        $('body').removeClass('gray-over');
    });

    });
  }

}
