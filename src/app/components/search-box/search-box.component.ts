import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Output()
  public busqueda:EventEmitter<string>= new EventEmitter

  @Input()
public valorBusqueda:string=''
  enviarBusqueda(search: string){
    this.busqueda.emit(search)
  }

}
