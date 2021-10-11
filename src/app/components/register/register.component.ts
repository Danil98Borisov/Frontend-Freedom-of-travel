import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from "../../services/user.registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};

  isSignUpCompleted = false;
  isSignUpFailed = false;
  isVerificationCompleted = false;

  errorMessage = '';
  resendVerifyEmailMessage = '';

  constructor(private userRegistrationService: UserRegistrationService,
              private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log("RegisterComponent: onSubmit");
    this.isSignUpCompleted = false;
    this.isVerificationCompleted = false;

    this.userRegistrationService.register(this.form, this.getRandomString(64)).subscribe(
      data => {
        console.log(data);
        this.isSignUpCompleted = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  /*Send request verification email*/
  sendVerifyUserEmail(): void {
    this.isVerificationCompleted = false;
    this.userRegistrationService.resendVerifyUserEmail(this.form['email'])
      .subscribe((message: string) => {
          this.resendVerifyEmailMessage = message;
          console.log("resendVerifyEmailMessage: ", this.resendVerifyEmailMessage);
        }
      );
  }

  /*Generation string code for verification email*/
  getRandomString(length: number): any {
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * length));
    }
    return result;
  }

}
