import { Component, Input } from '@angular/core';
import { WeatherData } from '@app/compartido/modelos/weather.model';

@Component({
  selector: 'app-carta-individual',
  templateUrl: './carta-individual.component.html',
  styleUrls: ['./carta-individual.component.scss']
})
export class CartaIndividualComponent {
  @Input() city!: WeatherData;

}
