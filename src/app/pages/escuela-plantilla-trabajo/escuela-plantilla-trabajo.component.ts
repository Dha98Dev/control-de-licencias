import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { personalService } from '../../services/plantilla-personal.service';
import { Data, DatosEscuela } from '../../interfaces/escuela.interface';
import { error } from 'jquery';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-escuela-plantilla-trabajo',
  templateUrl: './escuela-plantilla-trabajo.component.html',
  styleUrl: './escuela-plantilla-trabajo.component.css'
})
export class EscuelaPlantillaTrabajoComponent {
public loader:boolean=true;
public personal:Data[]=[];
public error:boolean=false;
public tituloTabla:string="plantilla de personal"
public DatosEscuela:DatosEscuela={} as DatosEscuela;

  constructor(private _route:ActivatedRoute, private route:Router, private service:personalService){}
  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    if (!id) {
      this.route.navigate(['cct'])
    }
    else{ 
      // mandamos a llamar a las funciones que se conectan al servicio para obteber la plantilla y la informacion del centro de trabajo
  this.getPersonal(id!); 
  this.getDatosEscuela(id!)
}
  }

  // funcion para obtener los datos del personal de un determinado centro de trabajo
  getPersonal(cct:string){
this.service.obtenerPersonal(cct).subscribe(
       response => {
         this.personal=response.data;
         // haz lo que necesites con la respuesta
         console.log(this.personal)
         this.loader=false
       },
       (error: string) => {
         // Manejar el error aquí
         console.error('Error:', error);
         // Establecer la variable error en true para mostrar el error al usuario
         this.error = true;
  
         // Detener loader en caso de error
         this.loader = false;
       }
 
       
     );
  }

  // funcion para obtener la informacion de un determinado centro de trabajo

  getDatosEscuela(cct:string){
this.service.obtenerCentroTrabajo(cct).subscribe(
  response=> {
    this.error=false
  this.DatosEscuela=response.data[0]
  console.log(this.DatosEscuela)

},
(error: any) => { // Modificado a 'any' para capturar cualquier tipo de error
  // Manejar el error aquí
  console.error('Error:', error);
  // Establecer la variable error en true para mostrar el error al usuario
  this.error = true;
  // Detener loader en caso de error
  this.loader = false;
}
);
  }

  detailsPerson(curp:string):void{
    localStorage.setItem('curp',curp);
    localStorage.setItem('cct',this.DatosEscuela.CV_CCT)
    this.route.navigate(['personDetails'])
    
  }

}
