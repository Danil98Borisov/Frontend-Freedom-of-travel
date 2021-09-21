import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DetailsService} from "./details.service";
import {Details} from "../models/details";


@Component({
  selector: 'app-details',
  styleUrls: ['details.component.css'],
  templateUrl: 'details.component.html',
  providers: [DetailsService]
})

export class DetailsComponent implements OnInit {

  isImage: boolean = true;

  details: Details[]=[];


  constructor(private activatedRoute: ActivatedRoute,
              private detailsService: DetailsService,
              private router:Router //instanciate a router
  ) {
  }


  ngOnInit() {
    console.log("ApartmentPreviewComponent is opened, apart id = " + this.activatedRoute.snapshot.params.id);

   this.detailsService.getDetailsApartmentPage(this.activatedRoute.snapshot.params.id)
     .subscribe((data: Details[]) => this.details = data);
  }
  getImageApartment(image: any): any{
    if (this.isImage) {
      console.log("image = " + image);
      return "data:image/png;base64," + image;

    } else {
      this.isImage = false;
    }
  }
}
