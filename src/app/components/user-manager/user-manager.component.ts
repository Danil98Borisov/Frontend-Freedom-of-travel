import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../services/notification.service";
import {UserManagerService} from "./user-manager.service";

import {User} from "../models/user";
import {Reservation} from "../models/reservation";
import {AppNotificationConst} from "../../app.notification.const";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-user-manager',
  styleUrls: ['user-manager.component.css'],
  templateUrl: 'user-manager.component.html',
  providers: [UserManagerService,NotificationService]
})
export class UserManagerComponent implements OnInit {
  users: User[]=[]

  // MatPaginator Inputs
  length = 10;
  pageSize = 10;

  // MatPaginator Output
  pageEvent: PageEvent[]=[];

  constructor(private httpService: UserManagerService,
              private notificationService: NotificationService
              ) {
  }

  ngOnInit() {
    this.httpService.getAllUser().subscribe((data: User[]) => {
      this.users = data;
      console.log(JSON.stringify(data));
    });
    this.httpService.getAllUsersPaginated(0, this.pageSize)
      .subscribe((data: User[]) => this.users = data);
  }

  getUsersPaginated(pageNumber: number) {
    this.httpService.getAllUsersPaginated(pageNumber, this.pageSize)
      .subscribe((data: Reservation[]) => this.users = data);
  }

  public roleAdmin(id: number): void {
    this.httpService.adminRole(id).subscribe((data: User) => {
      this.notificationService.openSnackBarWithoutReload(AppNotificationConst.USER_ADMIN)
      return this.httpService.getAllUser().subscribe((data: User[]) => {
        this.users = data;
      });
    }, error => {
      console.log('error: ', error);
      this.notificationService.openSnackBarWithoutReload(AppNotificationConst.USER_NOT_ADMIN)
    })
  }

  displayedColumns: string[] = ['Id', 'Name','Email', 'Role', 'Actions'];
}
