import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '@app/compartido/servicios/weather.service';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';
import { WeatherData } from '@app/compartido/modelos/weather.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  barcelona$?: Observable<WeatherData>;
  paris$?: Observable<WeatherData>;
  london$?: Observable<WeatherData>;
  newyork$?: Observable<WeatherData>;
  tokyo$?: Observable<WeatherData>;

  constructor (private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.barcelona$ = this.weatherService.getDetails('barcelona-catalonia-spain');
    this.paris$ = this.weatherService.getDetails('paris-ile-de-france-france');
    this.london$ = this.weatherService.getDetails('london-city-of-london-greater-london-united-kingdom');
    this.newyork$ = this.weatherService.getDetails('new-york-new-york-united-states-of-america');
    this.tokyo$ = this.weatherService.getDetails('tokyo-tokyo-japan');
  }

}
