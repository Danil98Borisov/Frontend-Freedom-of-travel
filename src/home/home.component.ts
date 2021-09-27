import {Component, OnInit} from "@angular/core";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: []
})
export class HomeComponent implements OnInit {

  isLogin : boolean = false;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.currentIsLogIn.subscribe(isLogin => this.isLogin = isLogin);
    if(this.isLogin){
      this.reloadPage();
    }
  }

  reloadPage(): void {
    window.location.reload();
  }

}
