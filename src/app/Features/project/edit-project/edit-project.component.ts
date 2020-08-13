import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import {ProjectService} from '../project.service'
import {MessageService} from 'primeng/api';
import {UserService} from '../../../../app/Services/user.service';
import {SearchService} from '../../../Services/search.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  constructor(private httpsclient:HttpClient,
    private projectservice:ProjectService,
    private fb:FormBuilder,
    private messageservice:MessageService,
    private userService:UserService,
    private SearchService:SearchService,
    private route: ActivatedRoute
    ) { }

    EditProjectForm:FormGroup;
    ProjectList:any[];
    SearchResults: any[];
    loading: true;
    FilterKey: string;
    Details;



  ngOnInit(): void {

    this.SearchService.SetSource(null);
    this.route.queryParamMap.subscribe(params => {
      var id = params.get("id");

      this.projectservice.GetProjectListById(id).subscribe((res)=>
      {
        if(res.errorCode==0)
        {
            this.Details=res.dataObj[0];
            console.log("details"+this.Details["projectName"])
            this.initiliseProjectForm();
        }
      });
    });


}

  initiliseProjectForm=function()
  {
    var date = new Date();
    this.EditProjectForm=this.fb.group({
     projectId:[this.Details["projectId"],Validators.required],
     projectName:[this.Details["projectName"],Validators.required],
     projectPriority:[this.Details["projectPriority"],Validators.required],
     projectStatus:[this.Details["projectStatus"],Validators.required],
     projectDescription:[this.Details["projectDescription"],Validators.required],
     projectAttachment:[this.Details["projectAttachment"],Validators.required],
     projectStartDate:[this.Details["projectStartDate"],Validators.required],
     projectDueDate:[this.Details["projectDueDate"],Validators.required],
     projectCreatedBy:[this.Details["projectCreatedBy"],Validators.required],
     projectCreatedDate:[this.Details["projectCreatedDate"],Validators.required],
     projectUpdatedDate:[date,Validators.required],

   })
  }
  public FilterData = function (event) {
    var temp = this.EmployeeList
    var data = event.target.value;
    console.log(data);
    console.log(temp);

    this.SearchResults = temp.filter(item => {
      console.log(item);
      console.log(item[this.FilterKey]);
      console.log(item[this.FilterKey].toLowerCase().startsWith(data.toLowerCase()));
      return item[this.FilterKey].toLowerCase().includes(data.toLowerCase());
    }
    )
  }

  ResetForm=function()
  {
    this.CreateProjectForm.reset();
  }


  saveProjectClicked=function(data)
  {
    console.log("data "+data.projectId)
    this.projectservice.updateProject(data).subscribe((res) => {
      if (res.errorCode == 0) {
        this.messageservice.add({ severity: 'success', summary: 'Project Updated successfully', detail: '' });
        this.ResetForm()
      }
      else {
        this.messageservice.add({ severity: 'error', summary: res.errorMsg, detail: '' });
      }
    }, (error) => {
      console.log(error);
      this.messageservice.add({ severity: 'error', summary: "Error with the api , please try again" });
    });

  }


}
