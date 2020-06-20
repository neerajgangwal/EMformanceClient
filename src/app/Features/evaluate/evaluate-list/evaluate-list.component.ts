import { Component, OnInit } from '@angular/core';
import {EvaluateService} from '../evaluate.service'
import {LayoutService} from '../../../Services/layout.service'

@Component({
  selector: 'app-evaluate-list',
  templateUrl: './evaluate-list.component.html',
  styleUrls: ['./evaluate-list.component.css']
})
export class EvaluateListComponent implements OnInit {

  constructor(private evaluateservice:EvaluateService,private layoutservice:LayoutService) { }

  ngOnInit(): void {
    this.layoutservice.UpdateLayout(true,true,true,true);
  }

}
