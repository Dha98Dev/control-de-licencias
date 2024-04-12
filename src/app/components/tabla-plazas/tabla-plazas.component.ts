import { Component, Input } from '@angular/core';
import { Plaza } from '../../interfaces/escuela.interface';

@Component({
  selector: 'app-tabla-plazas',
  templateUrl: './tabla-plazas.component.html',
  styleUrl: './tabla-plazas.component.css'
})
export class TablaPlazasComponent {
@Input()
public Plazas:Plaza[]=[]
}
