import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../Services/layout.service';
import { SearchService } from '../../../Services/search.service';
import { RoleService } from '../role.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  RoleList: any[];
  SearchResults: any[];
  loading: true;
  FilterKey: string;

  constructor(private roleservice: RoleService ,   private messageService: MessageService) { }

  ngOnInit(): void {
    this.roleservice.GetDesignations().subscribe((res) => {
      this.RoleList = res.dataObj;

      console.log(this.RoleList);
      this.SearchResults = this.RoleList;
      this.FilterKey = "designationName";
    });
  }


  deleteIconClicked(data)
  {
    console.log(data);
    this.roleservice.deleteDesignation(data.designationId).subscribe((res)=>
    {
      if(res.errorCode==0)
      {
      this.RoleList.splice(this.RoleList.indexOf(data),1);

      this.SearchResults = this.RoleList;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Role deleted' });
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
    var temp = this.RoleList
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
