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
import {DatePipe} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-filter-hotel',
  templateUrl: 'filter-hotel.component.html',
  styleUrls: ['filter-hotel.component.css'],
  providers: [FilterHotelService,HotelService, DetailsHotelComponent, DetailsHotelService, HotelPreviewService]
})
export class FilterHotelComponent implements OnInit {

  // MatPaginator Inputs
  length = 40;
  pageSize = 5;

  // MatPaginator Output
  pageEvent: PageEvent[]=[];



  fil = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
    price: new FormControl(),
    city: new FormControl(),
    rating: new FormControl(),
    type: new FormControl()
  });

  hotelsPreviews: HotelPreview[]=[];
  isLogin : boolean = false;

  constructor(private filterHotelService: FilterHotelService,
              private router: Router,
              private datePipe: DatePipe,
              private authService: AuthService) {
  }

  public filter(fil: FormGroup,page: number): void {
    /*    console.log('fil.value.startDate = ', fil.value.startDate)
        console.log('fil.value.startDate = ')*/

    let startDate = this.datePipe.transform(fil.value.startDate, 'yyyy-MM-dd');
    let endDate = this.datePipe.transform(fil.value.endDate, 'yyyy-MM-dd');
    let sort ="DESC"

    this.filterHotelService.filterHotel(fil.value.price, fil.value.type, startDate, endDate, fil.value.city, fil.value.rating, sort, page)
      .subscribe((data: HotelPreview[]) => this.hotelsPreviews = data);
  }
  public filterAsc(fil: FormGroup,page: number): void {
    /*    console.log('fil.value.startDate = ', fil.value.startDate)
        console.log('fil.value.startDate = ')*/

    let startDate = this.datePipe.transform(fil.value.startDate, 'yyyy-MM-dd');
    let endDate = this.datePipe.transform(fil.value.endDate, 'yyyy-MM-dd');
    let sort = "ASC";

    this.filterHotelService.filterHotel(fil.value.price, fil.value.type, startDate, endDate, fil.value.city, fil.value.rating, sort, page)
      .subscribe((data: HotelPreview[]) => this.hotelsPreviews = data);
  }

  logFuncHotel(id: any) {
    console.log("Hi, I'm hotelPreviews" + id);
    this.router.navigate(['/hotel-details', id])
  }

  ngOnInit() {
    this.authService.currentIsLogIn.subscribe(isLogin => this.isLogin = isLogin);
    if(this.isLogin){
      this.reloadPage();
    }
  }
  reloadPage(): void {
    window.location.reload();
  }

  isImage: boolean = true;
  public getImageHotel(image: any, hotelId: any): any{

/*    if (image) {
      console.log("raster is OK for hotel : ", hotelId)
    } else if(!image) {
      console.log("raster is null for hotel : ", hotelId)
    }*/
    return ("data:image/png;base64," + image);
  }
  displayedColumns: string[] = ['photo', 'Name', 'city', 'rating','description'];
}
