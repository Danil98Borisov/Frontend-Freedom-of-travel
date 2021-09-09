import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelComponent} from "../hotel/hotel.component";
import {ApartmentComponent} from "../apartment/apartment.component";
import { AddHotelComponent } from 'src/add-hotel/add-hotel.component';
import { ReservationComponent } from 'src/reservation/reservation.component';
import { DeleteHotelComponent } from 'src/delete/delete-hotel.component';
import { EditHotelComponent } from 'src/edit-hotel/edit-hotel.component';



const routes: Routes = [
  {path: 'hotel', component: HotelComponent},
  {path: 'apartment', component: ApartmentComponent},
  {path: 'hotel/add', component: AddHotelComponent},
  {path: 'reservation', component: ReservationComponent},
  { path: 'hotel/delete', component: DeleteHotelComponent},
  { path: 'hotel/edit', component: EditHotelComponent}
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
