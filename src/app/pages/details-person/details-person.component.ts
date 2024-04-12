import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { personalService } from '../../services/plantilla-personal.service';
import { Data, DatosEscuela } from '../../interfaces/escuela.interface';

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrl: './details-person.component.css'
})
export class DetailsPersonComponent {
// inyectamos el servicio y las dependencias
  constructor(private _route:ActivatedRoute, private service:personalService, private route:Router){}

  // declaramos las variables que necesitaremos 
  public Personal:Data[]=[];
  public loader:boolean=true;
  public error:boolean=false;
  public DatosEscuela:DatosEscuela={} as DatosEscuela;

  // validamos que haya valores en cct y curp 
ngOnInit(){
  let curp:string=localStorage.getItem('curp')!;
  let cct:string=localStorage.getItem('cct')!;
  if (curp && cct) {
       this.getCct(cct);
       this.getPersonas(cct, curp);
   
  }
}
getCct(cct:string){
  this.service.obtenerCentroTrabajo(cct).subscribe(
    response=> {
      this.DatosEscuela=response.data[0]
      console.log(this.DatosEscuela)
    }
  )
}


getPersonas(cct:string, curp:string){
  this.service.obtenerPersonal(cct).subscribe(
    response => {
      this.Personal=response.data;
      // filtramos los datos para quedarnos solo con la que corresponde a la curp
      this.Personal=this.Personal.filter(registro => registro.curp === curp) 
      console.log(this.Personal)
      this.loader=false
     
    },
    error => {
      this.loader=false
    this.error=true
    }
  );
}

}

