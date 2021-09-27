import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
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
              private tokenStorage: TokenStorageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.username = String(this.route.snapshot.queryParams['username']);

    /*if (this.username) {
      this.form['username'] = this.username;
    }*/

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      const user = this.tokenStorage.getUser();
      this.email = user.email;
    }
  }


  onSubmit(): void {
    console.log("onSubmit()");

    this.authService.login(this.form).subscribe(
      // @ts-ignore
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

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
    this.router.navigate(['/home']);
  }
}
