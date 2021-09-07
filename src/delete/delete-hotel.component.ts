import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import {Observable, of, throwError} from 'rxjs';
import {catchError, map, retry, tap} from 'rxjs/operators';
import { DeleteHotelService } from './delete-hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-delete-hotel',
  styleUrls: ['delete-hotel.component.css'],
  templateUrl: 'delete-hotel.component.html',
  providers: [DeleteHotelService]

})
export class DeleteHotelComponent {
  id: number;

  constructor(private activateRoute: ActivatedRoute, private deleteHotelService: DeleteHotelService) {

    this.id = activateRoute.snapshot.params.id;
  }

  /*добавить слово api в URL*/
  hotelUrlAll = 'http://localhost:8050/hotel';

  delHotel() {
    this.id = this.activateRoute.snapshot.params.id;
    this.deleteHotelService.deleteHotel(this.id)
      .subscribe((data) => {
        console.log("success");
    });


    /*
      hotelUrlAdd = 'http://localhost:8050/hotel/add';
      public addHotel(hotels: Hotel): Observable<Hotel[]> {
        //return this.http.put<Hotel[]>(this.hotelUrlAdd, {id: hotels.id ,hotelsName: hotels.hotelName,city: hotels.city,rating: hotels.rating});
        return this.http.put<Hotel[]>(this.hotelUrlAdd, JSON.stringify(hotels));
      }*/

  }
}
