import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Apartment} from "../models/apartment";
import {ApartmentPreviewService} from "./apartment-preview.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConstComponent} from "../app/app-const.component";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {Details} from "../models/details";
import {ApartmentPreview} from "../models/apartmentPreview";


@Component({
  selector: 'app-apartment-preview',
  templateUrl: 'apartment-preview.component.html',
  providers: [ApartmentPreviewService]
})
export class ApartmentPreviewComponent implements OnInit {

  isImage: boolean = true;

  apartmentPreviews: ApartmentPreview[]=[];


  constructor(private activatedRoute: ActivatedRoute,
              private apartmentPreviewService: ApartmentPreviewService,
              private router:Router
  ) {
  }

  ngOnInit() {
    console.log("ApartmentPreviewComponent is opened, apart id = " + this.activatedRoute.snapshot.params.id);

    this.apartmentPreviewService.getApartmentPreviewPage()
     .subscribe((data: ApartmentPreview[]) => this.apartmentPreviews = data);
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
