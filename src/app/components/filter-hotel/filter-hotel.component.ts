import {Component, OnInit} from '@angular/core';
import {FilterHotelService} from './filter-hotel.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HotelPreview} from "../models/hotelPreview";
import {HotelService} from "../hotel/hotel.service";
import {HotelPreviewService} from "../hotel-preview/hotel-preview.service";
import {Router} from "@angular/router";
import {DetailsHotelComponent} from "../details-hotel/details-hotel.component";
import {DetailsHotelService} from "../details-hotel/details-hotel.service";
import {PageEvent} from "@angular/material/paginator";
import {ApartmentPreview} from "../models/apartmentPreview";

@Component({
  selector: 'app-filter-hotel',
  templateUrl: 'filter-hotel.component.html',
  styleUrls: ['filter-hotel.component.css'],
  providers: [FilterHotelService,HotelService, DetailsHotelComponent, DetailsHotelService, HotelPreviewService]
})
export class FilterHotelComponent implements OnInit {

  // MatPaginator Inputs
  length = 30;
  pageSize = 5;

  // MatPaginator Output
  pageEvent: PageEvent[]=[];
  public isDataLoaded: boolean = false;


  fil = new FormGroup({
    city: new FormControl(),
    rating: new FormControl()
  });

  hotelsPreviews: HotelPreview[]=[];


  constructor(private filterHotelService: FilterHotelService,
              private router: Router) {
  }

  public filter(fill: FormGroup, page: number): void {

    this.filterHotelService.filterHotel(fill.value.city, fill.value.rating, page)
      .subscribe((data: HotelPreview[]) => {
        this.hotelsPreviews = data;
        this.isDataLoaded = true;
      });
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
