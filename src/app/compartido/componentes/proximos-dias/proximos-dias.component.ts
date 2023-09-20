import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ForecastData } from '@app/compartido/modelos/location.model';

@Component({
  selector: 'app-proximos-dias',
  templateUrl: './proximos-dias.component.html',
  styleUrls: ['./proximos-dias.component.scss']
})
export class ProximosDiasComponent {
  @Input() proximosDias!: ForecastData[];
  today: Date = new Date();

  constructor(private datePipe: DatePipe) { }

  formatDay(dateStr: string): string {
    const date = new Date(dateStr); // Convertir el string en una instancia de Date
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
  
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      const formattedDate = this.datePipe.transform(date, 'EEEE');
      return formattedDate || 'Invalid Date';
    }
  }

}
