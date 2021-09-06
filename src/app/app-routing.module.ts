import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelComponent} from "../hotel/hotel.component";
import {ApartmentComponent} from "../apartment/apartment.component";


const routes: Routes = [
  {path: 'hotel', component: HotelComponent},
  {path: 'apartment', component: ApartmentComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
