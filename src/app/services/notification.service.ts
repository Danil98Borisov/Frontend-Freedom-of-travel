import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {
  }

  openSnackBar(id:number) {
    let message = "";
    let close = "Close";

    switch(id){
      case(1):
        message = "Reservation canceled"
        break;
      case(2):
        message = "Reservation NOT canceled"
        break;
      case(3):
        message = "Hotel edited"
        break;
      case(4):
        message = "Hotel NOT edited"
        break;
      case(5):
        message = "Hotel been removed"
        break;
      case(6):
        message = "Hotel NOT been removed"
        break;
      case(7):
        message = "Hotel added"
        break;
      case(8):
        message = "Hotel NOT added"
        break;
    }
      this._snackBar.open(message, close);
  }
  reboot() {
    setTimeout(function () {
      window.location.reload(true);
    }, 2000)
  }
}
