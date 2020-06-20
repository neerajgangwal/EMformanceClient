import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

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
