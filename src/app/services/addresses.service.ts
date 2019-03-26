import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { RestfulResponse } from '../models/restful-response.model';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  private apiUrl = 'http://localhost:9050/addresses';
  
  constructor(private http:HttpClient) { }

  public getCountries(){
    return this.http.get<RestfulResponse>(this.apiUrl+"/countries");
  }

  public getCities(countrySelected: any){
    return this.http.get<RestfulResponse>(this.apiUrl+"/cities", {
      params: {
        country: countrySelected
      }
    });
  }
}
