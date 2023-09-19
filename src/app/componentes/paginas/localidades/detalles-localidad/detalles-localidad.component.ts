import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { WeatherData } from '@app/compartido/modelos/weather.model';
import { WeatherService } from '@app/compartido/servicios/weather.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-detalles-localidad',
  templateUrl: './detalles-localidad.component.html',
  styleUrls: ['./detalles-localidad.component.scss']
})
export class DetallesLocalidadComponent implements OnInit {
  
  localidad$: Observable<WeatherData> | undefined;

  constructor (
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params => {
      const url = params['id'];
      this.localidad$ = this.weatherService.getDetails(url);
    }))
  }


  goBack(): void {
    this.location.back();
  }


}
