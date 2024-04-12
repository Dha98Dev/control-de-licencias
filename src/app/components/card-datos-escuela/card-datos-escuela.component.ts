import { Component, Input } from '@angular/core';
import { DatosEscuela } from '../../interfaces/escuela.interface';

@Component({
  selector: 'app-card-datos-escuela',
  templateUrl: './card-datos-escuela.component.html',
  styleUrl: './card-datos-escuela.component.css'
})
export class CardDatosEscuelaComponent {

  @Input()
  public datosEscuela:DatosEscuela={} as DatosEscuela
}
