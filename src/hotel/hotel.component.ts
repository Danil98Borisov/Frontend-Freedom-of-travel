import {Component, OnInit} from '@angular/core';
import { DeleteHotelService } from 'src/delete/delete-hotel.service';
import {Hotel} from "./hotel";



@Component({
  selector: 'app-delete-hotel',
  styleUrls: ['hotel.component.css'],
  templateUrl: 'hotel.component.html',
  providers: [DeleteHotelService]
})

export class HotelComponent implements OnInit {
  hotels: Hotel[]=[];

  constructor(private httpService: DeleteHotelService, private hotelService: DeleteHotelService){}

  delete(hotel: Hotel): void {
    this.hotels = this.hotels.filter(h => h !== hotel);
    this.hotelService.deleteHotel(hotel.id).subscribe();
  }


  ngOnInit(){

    this.hotelService.getAllHotelPage().subscribe((data: Hotel[]) => this.hotels=data);
  }

  displayedColumns: string[] = ['id', 'hotelName', 'city', 'rating'];

}






















/*  id: number;

  constructor(private activateRoute: ActivatedRoute, private deleteHotelService: HotelService) {

    this.id = activateRoute.snapshot.params.id;
  }*/

/*  constructor(private http: HttpClient) {
  }
  deleteHotelUrlAll = 'http://localhost:8050/hotel/delete/{id}';

  deleteHotel(id: number): Observable<any>{
    //console.log(this.deleteHotelUrlAll + id);
    console.log(id)
    console.log(this.deleteHotelUrlAll + id)
    return this.http.hotel(this.deleteHotelUrlAll + id)
  }

  delHotel(form: NgForm) {
    return this.deleteHotel(form.value).subscribe(id => {
      console.log("Удалили отель с ID: ", JSON.stringify(id));
    }, error => {
      console.log('error: ', error);
    });
  }*/


