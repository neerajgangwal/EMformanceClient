import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SignupService } from '../signup.service';


@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private signupService: SignupService,private router:Router) { }
  loading: boolean = false;
  message: string = "";
  verified: boolean;
  ngOnInit(): void {
    this.loading = true;
    this.route.queryParamMap.subscribe(params => {
      var token = params.get("tokenId");
      console.log(token);
      this.signupService.ValidateToken(token)
        .subscribe(res => {
          this.loading = false;
          if (res.errorCode == 0) {
            this.message = "Successfully verified";
            this.verified = true;
            this.router.navigate(['company', 'update'], { queryParams: { 'userId': res.dataObj.userId, 'emailId': res.dataObj.email } });
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

}
