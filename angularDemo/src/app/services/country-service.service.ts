import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../models/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/rest/v2';
  }

  public readAll(): Observable<Country[]>{
    return this.http.get<Country[]>(this.url);
  }

  public create(country: Country){
    return this.http.post<Country>(this.url, country);
  }

  public update(country: Country){
    return this.http.put<Country>(this.url, country)
  }

  public delete(country: Country){
    return this.http.delete<Country>(this.url+"/"+country.id);
  }
}
