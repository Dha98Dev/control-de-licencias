import { Component, Input } from '@angular/core';
import { Data, Plaza } from '../../interfaces/escuela.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card-datos-maestro',
  templateUrl: './card-datos-maestro.component.html',
  styleUrl: './card-datos-maestro.component.css'
})
export class CardDatosMaestroComponent {
constructor(private location:Location){}

  @Input()
  public Maestro:Data[]=[]

  cancelar(){
    this.location.back()
  }

}
