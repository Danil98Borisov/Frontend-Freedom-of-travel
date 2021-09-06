import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelComponent} from "../hotel/hotel.component";
import {ApartmentComponent} from "../apartment/apartment.component";
import { HttpComponent } from 'src/http/http.component';
import { ReservationComponent } from 'src/reservation/reservation.component';



const routes: Routes = [
  {path: 'hotel', component: HotelComponent},
  {path: 'apartment', component: ApartmentComponent},
  {path: 'hotel/add', component: HttpComponent},
  {path: 'reservation', component: ReservationComponent}
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
