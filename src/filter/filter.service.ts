import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';
import { Injectable } from '@angular/core';


import {Observable} from 'rxjs';
import { Apartment } from 'src/apartment/apartment';


@Injectable()
export class FilterService {
  constructor(private http: HttpClient) {
  }
  apartmentUrlFilter = 'http://localhost:8050/apartment/find?startDate=2021-03-15&endDate=2021-03-25&rating=4&city=NN&price=120';

 public getFilterApartment(): Observable<Apartment[]> {
    console.log();
    return this.http.get<Apartment[]>(this.apartmentUrlFilter);
  }
}
