import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../project.service';
import {LayoutService} from '../../../Services/layout.service'
import {SearchService} from '../../../Services/search.service'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  
  projectList:any[];
  constructor(private projectservice:ProjectService,
    private layoutservice:LayoutService,
    public searchservice:SearchService) {}

  ngOnInit(): void {

    this.layoutservice.UpdateLayout(true,true,true,true);
    this.projectservice.GetProjectList().subscribe((res)=>{
      
      console.log(res)
      this.projectList=res.dataObj;
      this.searchservice.SetSource(res.dataObj);
      this.searchservice.Key="projectName";
    });
    
  }

}
