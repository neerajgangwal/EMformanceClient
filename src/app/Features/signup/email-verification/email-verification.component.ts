import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SignupService } from '../signup.service';
import { EmployeePermissions } from '../../../Entities/EmployeePermissions';
import { EmployeeRoleElement } from '../../../Entities/EmployeeRoleElement';
import { ElementOperation } from '../../../Entities/ElementOperation';


@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private signupService: SignupService, private router: Router) { }
  loading: boolean = false;
  message: string = "";
  verified: boolean;
  OperationsData: any[];
  ElementsData: any[];

  ngOnInit(): void {
    this.loading = true;
    this.route.queryParamMap.subscribe(params => {
      var token = params.get("tokenId");
      console.log(token);
      this.signupService.ValidateToken(token)
        .subscribe(res => {
          if (res.errorCode == 0) {
            this.signupService.getElements(res.dataObj.companyInfo)
              .subscribe((res1) => {
                if (res1.errorCode == 0) {
                  this.ElementsData = res1.dataObj;
                  this.signupService.getOperations(res.dataObj.companyInfo).subscribe((res2) => {
                    if (res2.errorCode == 0) {
                      this.OperationsData = res2.dataObj;
                      var empData = this.GetEmpData(res.dataObj);
                      this.signupService.CreateEmployee(res.dataObj.companyInfo, empData).subscribe((res3) => {
                        if (res3.errorCode == 0) {
                          this.loading = false;
                          this.message = "Successfully verified";
                          this.verified = true;
                          this.router.navigate(['login']);
                        }
                        else {
                        }
                      }, (err) => {
                      });
                    };
                  });
                }
              });
          }
          else {
            this.verified = false;
            this.message = "Failed to verified, please try again";
          }
        }, error => {
          this.loading = false;
          this.verified = false;
          console.log(error);
          this.message = "Failed to verified, please try again";
        });

    });
  }

  GetEmpData(data) {
    var Empobj = new EmployeePermissions();
    Empobj.designationId = -1;
    Empobj.departmentId = -1;
    Empobj.employeeFname = data.name;
    Empobj.employeeEmail = data.email;
    Empobj.employeePassword = "";
    Empobj.employeeCode = data.userId;
    Empobj.employeeMname="";
    Empobj.gender="Male";
    Empobj.employeeMobileNo="12345";
    Empobj.employeeProfileImg="";
    Empobj.employeeElementMappingList = [];


    for (let index = 0; index < this.ElementsData.length; index++) {
      const ele = this.ElementsData[index];
      var element = new EmployeeRoleElement();
      element.elementId = ele.elementId;
      element.employeeElementOprationList = [];
      for (let index2 = 0; index2 < this.OperationsData.length; index2++) {
        const ops = this.OperationsData[index2];
        var opertaion = new ElementOperation();
        opertaion.operationId = ops.operationId;
        element.employeeElementOprationList.push(opertaion);
      }
      Empobj.employeeElementMappingList.push(element);
    }
    return Empobj;

  }

}
