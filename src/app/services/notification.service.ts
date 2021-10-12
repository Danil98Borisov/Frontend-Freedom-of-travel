import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable()
export class NotificationService {
  constructor(private _snackBar: MatSnackBar) {
  }

  openSnackBar(message: string) {
    let close = "Close";
      this._snackBar.open(message, close);
    setTimeout(function () {
      window.location.reload(true);
    }, 500)
  }
}
