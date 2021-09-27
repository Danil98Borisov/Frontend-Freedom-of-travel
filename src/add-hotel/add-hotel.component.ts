import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Hotel} from 'src/models/hotel';
import {AddHotelService} from './add-hotel.service';
import {HttpClient} from "@angular/common/http";
import {AppApiConst} from "../app/app.api.const";

@Component({
  selector: 'app-add-hotel',
  styleUrls: ['add-hotel.component.css'],
  templateUrl: 'add-hotel.component.html',
  providers: [AddHotelService]
})
export class AddHotelComponent {

  constructor(private http: HttpClient) {
  }

  public addHotel(hotel: Hotel) {

    return this.http.put<Hotel>(AppApiConst.HOTEL_ADD, hotel)
      .subscribe(hotel => {
        console.log("Отель добавлен: ", hotel);
      }, error => {
        console.log('error: ', error);
      });
  }

  onSubmit(form: NgForm) {
    return this.addHotel(form.value)
  }

}
