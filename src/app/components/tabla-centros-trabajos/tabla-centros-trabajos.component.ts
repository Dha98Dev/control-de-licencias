import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DatosEscuela, Escuela } from '../../interfaces/escuela.interface';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-tabla-centros-trabajos',
  templateUrl: './tabla-centros-trabajos.component.html',
  styleUrl: './tabla-centros-trabajos.component.css'
})
export class TablaCentrosTrabajosComponent {

  @ViewChild(DataTableDirective, {static: false}) dtElement!: DataTableDirective;
 @Input()
 public centrosDeTrabajo:DatosEscuela[]=[];

 @Output()
 public onCentroTrabajo=new EventEmitter<string>()

 emitCentroTrabajo(cct:string):void{
  this.onCentroTrabajo.emit(cct)
 }

 dtOptions: DataTables.Settings = {};
 dtTrigger:Subject<any>=new Subject<any>()

 ngOnInit(): void {
  this.dtOptions = {
    //'sPaginationType': 'full_numbers',
    pagingType: 'full_numbers',
    pageLength: 10,
    autoWidth: false,
    //'retrieve': true,
    //'destroy': true,

    'order': [],
    responsive: true,
    language: {
      lengthMenu: "Mostrar _MENU_ registros por página",
      search: 'Buscar:',
      info: "Mostrando página _PAGE_ de _PAGES_ paginas ",
      infoEmpty: 'Mostrando del 0 al 0 de 0 Registros',
      searchPlaceholder:"filtrar registros ",
      
      paginate: {
        first: 'Primero',
        last: 'Ultimo',
        next: 'Siguiente',
        previous: 'Anterior',
      
        
      }
    },
    
  };
  
 }

}
