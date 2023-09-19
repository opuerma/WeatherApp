import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { SearchLocation } from '@app/compartido/modelos/location.model';
import { WeatherService } from '@app/compartido/servicios/weather.service';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-lista-localidades',
  templateUrl: './lista-localidades.component.html',
  styleUrls: ['./lista-localidades.component.scss']
})
export class ListaLocalidadesComponent implements OnInit {

  localidades: SearchLocation[] = [];

  private query?: string;

  constructor (
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.onUrlChanged();
  }

  ngOnInit(): void {
    this.filtrarLocalidades();
  }


  private filtrarLocalidades(): void {
    this.route.queryParamMap.pipe(take(1)).subscribe((params:ParamMap) => {
      //console.log('Params=>', params);
      const queryParam = params.get('q');
      if (queryParam !== null) {
        this.query = queryParam;
        this.getDataFromService();
      }
    })
  }


  private getDataFromService(): void {
    this.weatherService.searchLocations(this.query)
    .pipe(
      take(1)
    ).subscribe((res:any) => {
      //console.log('Response =>', res);
      if (res.length) {
        this.localidades = res;
      }
      else {
        this.localidades = [];
      }
    });
  }


  // Al cambiar la URL limpiamos la array de localidades para poder hacer búsquedas nuevas
  private onUrlChanged(): void {
    this.router.events.pipe(
      filter((Event) => Event instanceof NavigationEnd)).subscribe(
        ()=> {
          this.localidades = []
          this.filtrarLocalidades();
        }
    )
  }

}
