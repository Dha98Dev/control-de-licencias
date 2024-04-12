import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from '../../interfaces/escuela.interface';

@Component({
  selector: 'app-tabla-plantilla-personal',
  templateUrl: './tabla-plantilla-personal.component.html',
  styleUrl: './tabla-plantilla-personal.component.css'
})
export class TablaPlantillaPersonalComponent {

@Input()
public Personal:Data[]=[]

@Input()
public TituloTabla:string=""

@Output()
public onEmitCurp=new EventEmitter

emimitirCurp(curp:string){
  this.onEmitCurp.emit(curp)
}
}
