import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Validators,FormBuilder,FormGroup} from '@angular/forms';
import {ProjectService} from '../project.service'
import {MessageService} from 'primeng/api';
import {UserService} from '../../../../app/Services/user.service';
import {SearchService} from '../../../Services/search.service'

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(private httpsclient:HttpClient,
    private projectservice:ProjectService,
    private fb:FormBuilder,
    private messageservice:MessageService,
    private userService:UserService,
    private SearchService:SearchService
    ) { }

    CreateProjectForm:FormGroup;
    AddTeamForm:FormGroup;

    ProjectList:any[];
    SearchResults: any[];
    loading: true;
    FilterKey: string;
    EmployeeList:any[];



  ngOnInit(): void {
    this.SearchService.SetSource(null);

    this.CreateProjectForm=this.fb.group({
      projectName:['',Validators.required],
      projectPriority:['',Validators.required],
      projectDescription:['',Validators.required],
      projectAttachment:['assets/Images/download.jpeg',Validators.required],
      projectStartDate:['',Validators.required],
      projectDueDate:['',Validators.required],
      projectCreatedBy:[this.userService.LoggedInUser.Id]
    })

    //employeeList
    this.projectservice.getEmployeeList().subscribe((res)=>
    {
      this.EmployeeList=res.dataObj;   
      this.EmployeeList.forEach((element) => {
        element.FullName = element.employee.employeeFname + " " + element.employee.employeeMname;
      })
         console.log(this.EmployeeList);
        this.SearchResults=this.EmployeeList;
        this.FilterKey = "FullName";
         
    });
    
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

 
  CreateProjectClicked=function(data)
  {
    console.log(data);
    this.projectservice.CreateProject(data).subscribe((res)=>
    {
      if(res.errorCode==0){ 
      console.log(res);   
      console.log(res.dataObj);
      console.log("project created");
      this.messageservice.add({ severity: 'success', summary: 'project Created', detail: 'Via MessageService' });
      console.log(this.ProjectList);
      this.ResetForm();
      }
      else{
        
      }
    })
  }

}
