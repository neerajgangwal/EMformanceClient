import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../project.service';
import {LayoutService} from '../../../Services/layout.service'
import {SearchService} from '../../../Services/search.service';
import { MessageService } from 'primeng/api';
import * as $ from 'jquery' ;
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  
  projectList:any[];
  viewList:any[]=[];
  SearchResults: any[];
  loading: true;
  FilterKey: string;

  constructor(private projectservice:ProjectService,
    private layoutservice:LayoutService,
    public searchservice:SearchService,
    private messageService: MessageService,
    private router:Router
    
    ) {}

  ngOnInit(): void {
    var id=-1;
     this.layoutservice.UpdateLayout(true,true,true,true);
     this.projectservice.GetProjectList(id).subscribe((res)=>{    
      console.log(res);
      this.projectList=res.dataObj;
      console.log(this.projectList);
      this.SearchResults = this.projectList;
      this.FilterKey = "projectName";
    });
    $('.slide-close').on('click', function() {
      $(this).parent().removeClass('open-slide');
      $('body').removeClass('gray-over');
  });
  
  }


  ViewIconClicked(data)
  {  $('#add-task').addClass('open-slide');
     $('body').addClass('gray-over');
      console.log(data);
      this.viewList=data;
      console.log(this.viewList);
  }

  editIconClicked(id){
    console.log("inside edit click"+id);
    this.router.navigate(['project', 'edit'], { queryParams: { 'id':id} });
  }

  deleteIconClicked(data)
  {
    console.log(data);
    this.projectservice.deleteProject(data).subscribe((res)=>
    {
      if(res.errorCode==0)
      {
      this.projectList.splice(this.projectList.indexOf(data),1);
      this.SearchResults = this.projectList;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Project deleted' });
      }
      else{
        this.messageService.add({ severity: 'error', summary: 'Failed', detail: res.errorMsg });
      }
    }
    ,(err)=>{
      console.log(err);
      this.messageService.add({ severity: 'error', summary: 'Failed', detail: "Something went wrong" });
    });

  }


  public FilterData = function (event) {
    var temp = this.projectList
    var data = event.target.value;
    console.log(data);
    console.log(temp);

    this.SearchResults = temp.filter(item => {
      console.log(item);
      console.log("---------");
      console.log(this.FilterKey);
      console.log(item[this.FilterKey]);
      console.log(item[this.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
      return item[this.FilterKey].toLowerCase().includes(data.toLowerCase());
    }
    )
  }


}
