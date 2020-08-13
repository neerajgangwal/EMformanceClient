import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeePermissions } from 'src/app/Entities/EmployeePermissions';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) { }

  Employee;
  DepartmentName;
  DesignationName;
  Operations: any[];
  Elements: any[];
  Permissions: any[];
  EmployeeSkills:any[];
  Skills:any[];
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      var id = params.get("id");

      this.employeeService.GetEmployeeById(id).subscribe((res) => {
        if (res.errorCode == 0) {
          this.Employee = res.dataObj[0];
          this.GetDesignationById(this.Employee.designationId);
          this.GetDepartmentById(this.Employee.departmentId);
          this.employeeService.getOperations().subscribe(res => {
            if (res.errorCode == 0) {
              this.Operations = res.dataObj;
              this.employeeService.getElements().subscribe(res => {
                if (res.errorCode == 0) {
                  this.Elements = res.dataObj;
                  this.employeeService.getEmployeeElementMapping(id).subscribe(res => {
                    if (res.errorCode == 0) {
                      this.Permissions = res.dataObj.employeeElementMappingList;
                      this.getEmployeeSkills(id);
                      this.getAllEmployeeSkills();
                      //MapPermissionsList(res.dataObj.employeeElementMappingList);
                    }
                  });
                }
              });
            }
          });
        }
      })
    });
  }

  MapPermissionsList(data) {
    if (data) {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        for (let index2 = 0; index2 < element.employeeElementOprationList.length; index2++) {
          const operation = element.employeeElementOprationList[index2];

        }
      }
    }
  }

  getEmployeeSkills(id){
    console.log("skill called");
    this.employeeService.GetSkillsMappedToEmployee(id)
    .subscribe(res => {
      if (res.errorCode == 0) {
        console.log(res.dataObj);
        this.EmployeeSkills = res.dataObj;
      }
      else {

      }
    });
  }

  getAllEmployeeSkills()
  {
    this.employeeService.GetAllTheSkills()
    .subscribe(res => {
      if (res.errorCode == 0) {
        console.log(res.dataObj);
        this.Skills = res.dataObj;
      }
      else {

      }
    });
  }

  getSkillNameById(id)
  {
    for (let index = 0; index < this.Skills.length; index++) {
      const element = this.Skills[index];
      if(element.skillId==id)
      {
        return element.skillName;
      }
    }
  }

  GetOperationName(id) {
    for (let index = 0; index < this.Operations.length; index++) {
      const operation = this.Operations[index];
      if (operation.operationId == id) {
        return operation.operationName;
      }
    }
  }

  GetElementName(id) {
    for (let index = 0; index < this.Elements.length; index++) {
      const element = this.Elements[index];
      if (element.elementId == id) {
        return element.elementName;
      }
    }
  }

  GetDesignationById(id)
  {
      this.employeeService.GetDesignation(id).subscribe(res=>{
        this.DepartmentName=res.dataObj[0].departmentName;
      })
  }

  GetDepartmentById(id)
  {
      this.employeeService.GetDepartment(id).subscribe(res=>{
        this.DesignationName=res.dataObj[0].designationName;
      })
  }

}
