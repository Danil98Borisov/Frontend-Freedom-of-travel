import {Component, OnInit} from '@angular/core';
import {FilterHotelService} from './filter-hotel.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HotelPreview} from "../models/hotelPreview";
import {HotelService} from "../hotel/hotel.service";
import {HotelPreviewService} from "../hotel-preview/hotel-preview.service";
import {Hotel} from "../models/hotel";
import {Router} from "@angular/router";
import {DetailsHotelComponent} from "../details-hotel/details-hotel.component";
import {DetailsHotelService} from "../details-hotel/details-hotel.service";

@Component({
  selector: 'app-filter-hotel',
  templateUrl: 'filter-hotel.component.html',
  styleUrls: ['filter-hotel.component.css'],
  providers: [FilterHotelService,HotelService, DetailsHotelComponent, DetailsHotelService, HotelPreviewService]
})
export class FilterHotelComponent implements OnInit {

  fil = new FormGroup({
    city: new FormControl(),
    rating: new FormControl()
  });

  hotelsPreviews: HotelPreview[]=[];


  constructor(private filterHotelService: FilterHotelService,
              private router: Router) {
  }

  public filter(fill: FormGroup): void {

    this.filterHotelService.filterHotel(fill.value.city, fill.value.rating)
      .subscribe((data: HotelPreview[]) => this.hotelsPreviews = data);
  }

  logFuncHotel(id: any) {
    console.log("Hi, I'm hotelPreviews" + id);
    this.router.navigate(['/hotel-details', id])
  }

  ngOnInit() {
  }

  isImage: boolean = true;
  public getImageHotel(image: any, hotelId: any): any{

    if (image) {
      console.log("raster is OK for hotel : ", hotelId)
    } else if(!image) {
      console.log("raster is null for hotel : ", hotelId)
    }
    return ("data:image/png;base64," + image);
  }
  displayedColumns: string[] = ['photo', 'Name', 'city', 'rating','description'];
}
