import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Hotel} from 'src/delete/hotel';
import {HttpClient} from "@angular/common/http";
import {EditHotelService} from "./edit-hotel.service";
import {AppApiConst} from "../app/app.api.const";

@Component({
  selector: 'app-edit-hotel',
  styleUrls: ['edit-hotel.component.css'],
  templateUrl: 'edit-hotel.component.html',
  providers: [EditHotelService]
})
export class EditHotelComponent {
  hotels: Hotel[] = [];

  constructor(private http: HttpClient) {
  }

  public editHotel(hotel: Hotel) {

    return this.http.post<Hotel>(AppApiConst.HOTEL_EDIT, hotel)
      .subscribe(hotel => {
        console.log("Отель изменён: ", hotel);
      }, error => {
        console.log('error: ', error);
      });
  }

  onSubmitEdit(form: NgForm) {
    return this.editHotel(form.value)
  }

}
