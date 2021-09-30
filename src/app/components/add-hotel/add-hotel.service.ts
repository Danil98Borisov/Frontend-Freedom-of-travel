import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AddHotelService {

  constructor(private http: HttpClient) {
  }
}
