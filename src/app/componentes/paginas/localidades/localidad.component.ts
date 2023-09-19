import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { SearchLocation } from "@app/compartido/modelos/location.model";


@Component({
    selector: 'app-localidad',
    templateUrl: './localidad.component.html',
    styleUrls: ['./localidad.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalidadComponent {
    @Input() localidad!: SearchLocation;
    
}