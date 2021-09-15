import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Apartment} from "../apartment/apartment";
import {DetailsService} from "./details.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConstComponent} from "../app/app-const.component";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";


@Component({
  selector: 'app-details',
  styleUrls: ['details.component.css'],
  templateUrl: 'details.component.html',
  providers: [DetailsService]
})

export class DetailsComponent implements OnInit {

  isImage: boolean = true;

  apartments: Apartment[] = [];


  constructor(private activatedRoute: ActivatedRoute,
              private detailsService: DetailsService,
              private router:Router //instanciate a router
  ) {
  }

   detailsApartment(id: number): any {
   console.log("A теперь здесь detailsApartment" +id)
  }

  ngOnInit() {
    console.log("DetailsComponent is opened, apart id = " + this.activatedRoute.snapshot.params.id);
    //this.apartmentService.getAllApartmentPage().subscribe((data: Apartment[]) => this.apartments = data);
   this.detailsService.getDetailsApartmentPage(this.activatedRoute.snapshot.params.id)
     .subscribe((data: Apartment[]) => this.apartments = data);
  }
  getImageApartment(image: any): any{
    if (this.isImage) {
      console.log("image: ", image)
      return "data:image/png;base64," + image;

    } else {
      this.isImage = false;
    }
  }
  displayedColumns: string[] = ['photo'];
}
