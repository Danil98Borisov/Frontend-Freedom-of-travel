import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApartmentPreviewService} from "./apartment-preview.service";
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

}
