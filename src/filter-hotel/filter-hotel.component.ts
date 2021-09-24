import {Component, OnInit} from '@angular/core';
import {FilterHotelService} from './filter-hotel.service';
import {FormControl, FormGroup} from '@angular/forms';
import {DetailsComponent} from "../details/details.component";
import {DetailsService} from "../details/details.service";
import {HotelPreview} from "../models/hotelPreview";
import {HotelService} from "../hotel/hotel.service";
import {HotelPreviewService} from "../hotel-preview/hotel-preview.service";
import {Hotel} from "../models/hotel";

@Component({
  selector: 'app-filter-hotel',
  templateUrl: 'filter-hotel.component.html',
  styleUrls: ['filter-hotel.component.css'],
  providers: [FilterHotelService,HotelService, DetailsComponent, DetailsService, HotelPreviewService]
})
export class FilterHotelComponent implements OnInit {

  fill = new FormGroup({
    city: new FormControl(),
    rating: new FormControl()
  });

  hotelsPreviews: HotelPreview[]=[];


  constructor(private filterHotelService: FilterHotelService) {
  }

  public filter(fill: FormGroup): void {
    let h: Hotel = fill.value

    this.filterHotelService.filterHotel(fill.value.city, fill.value.rating)
      .subscribe((data: HotelPreview[]) => this.hotelsPreviews = data);
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
  displayedColumns: string[] = ['photo', 'Name', 'city', 'rating'];
}
