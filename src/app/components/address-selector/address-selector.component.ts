import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AddressesService } from '../../services/addresses.service';

@Component({
  selector: 'app-address-selector',
  templateUrl: './address-selector.component.html',
  styleUrls: ['./address-selector.component.css']
})
export class AddressSelectorComponent implements OnInit {

  countries: any = [];
  cities: any = [];
  @Output() refreshDataEvent = new EventEmitter<string>();

  constructor(private router: Router, private addressesService: AddressesService) { }

  ngOnInit() {
    this.addressesService.getCountries().subscribe(response => {
       this.countries = response.data.countries;
       console.log(JSON.stringify(this.countries));        
    });
 }

 populateCities(countrySelected: any) {
   console.log(countrySelected);
   this.addressesService.getCities(countrySelected).subscribe(response => {
     this.cities = response.data.cities;
     console.log(JSON.stringify(this.cities));        
   });
 }

 refreshData(beneficiarySelected: any){
  console.log(beneficiarySelected);
  this.refreshDataEvent.emit(beneficiarySelected);
 }

}
