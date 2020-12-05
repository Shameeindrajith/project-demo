import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import{ CountryServiceService } from '../../services/country-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryServiceService) { }

  ngOnInit(): void {
    this.countryService.readAll().subscribe(data => {
      this.countries = data;
    });
  }

}
