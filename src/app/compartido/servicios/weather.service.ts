import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchLocation } from '../modelos/location.model';
import { WeatherData } from '../modelos/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  searchLocations(query='') {
    return this.http.get<SearchLocation[]>(
      `${environment.baseUrlApi}/search.json?key=${environment.apiKey}&q=${query}`
    );
  }

  getDetails(urlCity: string) {
    return this.http.get<WeatherData>(
      `${environment.baseUrlApi}/forecast.json?key=${environment.apiKey}&q=${urlCity}&days=3&aqi=yes&lang=es`
    );
  }

}
