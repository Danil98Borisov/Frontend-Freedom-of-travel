import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {SessionStorageService} from '../../services/session-storage.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  username: string = '';
  email: string = '';
  message: string = '';
  isLogin: boolean = true;

  constructor(private authService: AuthService,
              private sessionStorageService: SessionStorageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.username = String(this.route.snapshot.queryParams['username']);

    /*if (this.username) {
      this.form['username'] = this.username;
    }*/

    if (this.sessionStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.sessionStorageService.getUser().roles;
      const user = this.sessionStorageService.getUser();
      this.email = user.email;
    }
  }


  onSubmit(): void {
    console.log("onSubmit()");

    this.authService.signIn(this.form).subscribe(
      // @ts-ignore
      data => {
        this.sessionStorageService.saveToken(data.token);
        this.sessionStorageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.sessionStorageService.getUser().roles;

        if(this.isLoggedIn){
          console.log("to /Home");
          this.authService.sendMessage(this.isLogin);
          this.goToHome();
        }
      },
      // @ts-ignore
      err => {
        this.errorMessage = err.error.message;
        console.log("ErrorMessage: ", this.errorMessage);
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  goToHome(): void {
    this.router.navigate(['/filter-hotel']);
  }
}
