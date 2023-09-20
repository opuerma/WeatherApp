import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherData } from '@app/compartido/modelos/weather.model';
import { WeatherService } from '@app/compartido/servicios/weather.service';
import { Observable, take } from 'rxjs';
import { ForecastData } from '@app/compartido/modelos/location.model';

@Component({
  selector: 'app-detalles-localidad',
  templateUrl: './detalles-localidad.component.html',
  styleUrls: ['./detalles-localidad.component.scss']
})
export class DetallesLocalidadComponent implements OnInit {
  
  localidad$: Observable<WeatherData> | undefined;
  proximasHoras: any[] = [];
  proximosDias: ForecastData[] = [];

  constructor (
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params => {
      const url = params['id'];
      this.localidad$ = this.weatherService.getDetails(url);

      this.localidad$.subscribe((localidad) => {
        const lastUpdated = new Date(localidad.current.last_updated);
        const nextThreeDays = localidad.forecast.forecastday.slice(0, 3);

        const currentHourIndex = localidad.forecast.forecastday[0].hour.findIndex(hourData => {
          const hourTime = new Date(hourData.time);
          return hourTime > lastUpdated;
        });
        this.proximasHoras = localidad.forecast.forecastday[0].hour.slice(currentHourIndex, currentHourIndex + 10);

        for (const day of nextThreeDays) {
          this.proximosDias.push({
            date: day.date,
            maxtemp_c: day.day.maxtemp_c,
            mintemp_c: day.day.mintemp_c,
            icon: day.day.condition.icon,
            text: day.day.condition.text
          });
        }

      });

    }))
  }


  goBack(): void {
    this.location.back();
  }


}
