import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proximas-horas',
  templateUrl: './proximas-horas.component.html',
  styleUrls: ['./proximas-horas.component.scss']
})
export class ProximasHorasComponent {
  @Input() proximasHoras!: any[];

}
