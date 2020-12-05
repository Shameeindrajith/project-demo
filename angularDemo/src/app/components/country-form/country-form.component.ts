import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryServiceService } from '../../services/country-service.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css']
})
export class CountryFormComponent implements OnInit {

  country: Country;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private countryService: CountryServiceService) {
      this.country = new Country();
     }

  onSubmit(){
    this.countryService.create(this.country).subscribe(result => this.gotoCountryList());
  }
  gotoCountryList(): void {
    this.router.navigate(['/countries']);
  }

  ngOnInit(): void {
  }

}
