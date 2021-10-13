import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../services/notification.service";
import {UserManagerService} from "./user-manager.service";

import {User} from "../models/user";
import {Reservation} from "../models/reservation";
import {AppNotificationConst} from "../../app.notification.const";

@Component({
  selector: 'app-user-manager',
  styleUrls: ['user-manager.component.css'],
  templateUrl: 'user-manager.component.html',
  providers: [UserManagerService,NotificationService]
})
export class UserManagerComponent implements OnInit {
  user: User[]=[]

  constructor(private httpService: UserManagerService,
              private notificationService: NotificationService
              ) {
  }

  ngOnInit() {
      this.httpService.getAllUser().subscribe((data: User[]) => this.user = data);

}
  public roleAdmin(id: number): void {
    this.httpService.adminRole(id).subscribe((data: User[]) => {
      this.user = data,
        this.notificationService.openSnackBar(AppNotificationConst.USER_ADMIN)
    }, error => {
      console.log('error: ', error);
      this.notificationService.openSnackBar(AppNotificationConst.USER_NOT_ADMIN)
    })
  }

  displayedColumns: string[] = ['id', 'username','email'];
}
