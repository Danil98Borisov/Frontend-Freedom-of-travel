import {Component, OnInit} from '@angular/core';
import {Apartment} from "../models/apartment";
import {ApartmentSearchService} from './apartment-search.service';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {Router} from "@angular/router";
import {ApartmentPreview} from "../models/apartmentPreview";
import {ApartmentService} from "../apartment/apartment.service";
import {DetailsComponent} from "../details/details.component";
import {DetailsService} from "../details/details.service";
import {ApartmentPreviewService} from "../apartment-preview/apartment-preview.service";
import {PageEvent} from "@angular/material/paginator";
import {AuthService} from "../../services/auth.service";
import {HotelPreview} from "../models/hotelPreview";

@Component({
  selector: 'app-filter',
  templateUrl: 'apartment-search.component.html',
  styleUrls: ['apartment-search.component.css'],
  providers: [ApartmentSearchService,ApartmentService, DetailsComponent, DetailsService, ApartmentPreviewService]
})
export class ApartmentSearchComponent implements OnInit {

  isDataLoaded: boolean =  false;


    // MatPaginator Inputs
    length = 70;
    pageSize = 5;

    // MatPaginator Output
    pageEvent: PageEvent[]=[];

    isLogin : boolean = false;

    fil = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl(),
      price: new FormControl(),
      city: new FormControl(),
      rating: new FormControl(),
      type: new FormControl()
    });

    hotelsPreviews: HotelPreview[]=[];


  constructor(private filterService: ApartmentSearchService,
              private datePipe: DatePipe,
              private router: Router,
              private authService: AuthService) {
  }


    public filter(fil: FormGroup,page: number): void {
  /*    console.log('fil.value.startDate = ', fil.value.startDate)
      console.log('fil.value.startDate = ')*/

      let startDate = this.datePipe.transform(fil.value.startDate, 'yyyy-MM-dd');
      let endDate = this.datePipe.transform(fil.value.endDate, 'yyyy-MM-dd');

      /*this.filterService.filterApartment(fil.value.price, fil.value.type, startDate, endDate, fil.value.city, fil.value.rating,page)
        .subscribe((data: HotelPreview[]) => this.hotelsPreviews = data);*/
    }


    logFunc(id: any) {
      console.log("Hi, I'm apartmentPreviews " + id);
      this.router.navigate(['/apartment-details', id])
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
    public getImageApartment(image: any, apartId: any): any{

  /*    if (image) {
        console.log("raster is OK for apart : ", apartId)
      } else if(!image) {
        console.log("raster is null for apart : ", apartId)
      }*/
    return ("data:image/png;base64," + image);
  }
  displayedColumns: string[] = ['photo', 'hotel', 'type', 'price'];

}
