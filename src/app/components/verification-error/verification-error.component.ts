import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {UserRegistrationService} from "../../services/user.registration.service";

@Component({
  selector: 'app-not-verify',
  templateUrl: 'verification-error.component.html',
  styleUrls: ['verification-error.component.css']
})
export class VerificationErrorComponent implements OnInit {

  public isVerificationRequestSent = false;
  public isVerificationRequestFailed = false;

  public email = '';

  constructor(private userRegistrationService: UserRegistrationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  resendVerificationEmail(): any {
    const email = String(this.activatedRoute.snapshot.queryParams["email"]);
    console.log("email: ", email);

    if (email != 'undefined') {
      this.email = email;

      this.userRegistrationService.resendVerifyUserEmail(email)
        // @ts-ignore
        .subscribe((response) => {
          this.isVerificationRequestSent = true;
          this.isVerificationRequestFailed = false;
          console.log("VerificationErrorComponent: response = ", response);

          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 5000);
          // @ts-ignore
        }, error => {
          this.isVerificationRequestSent = true;
          this.isVerificationRequestFailed = true;
          console.log('error response: ', error);
        });
    } else {
      console.log("Error: email is not defined");
    }
  }
}
