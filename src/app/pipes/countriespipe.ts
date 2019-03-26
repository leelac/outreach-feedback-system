import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country.model';

@Pipe({
    name: 'eventCountries'
 })
export class Countriespipe implements PipeTransform {
    transform(allEventCountries: Country[]) {
      return allEventCountries;
    }
}
