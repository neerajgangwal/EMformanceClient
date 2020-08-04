import { Component, OnInit } from '@angular/core';
import {LayoutService} from '../../../Services/layout.service';
import {SearchService} from '../../../Services/search.service';
import {AdminProjectService} from './admin-project.service';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {

  projectList:any[];
  constructor(private adminprojectservice:AdminProjectService,
    private layoutservice:LayoutService,
    public searchservice:SearchService) {}

  ngOnInit(): void {

    this.layoutservice.UpdateLayout(true,true,true,true);
    this.adminprojectservice.GetProjectList().subscribe((res)=>{
      
      console.log(res)
      this.projectList=res.dataObj;
      this.searchservice.SetSource(res.dataObj);
      this.searchservice.Key="projectName";
    });
    
  }


}
