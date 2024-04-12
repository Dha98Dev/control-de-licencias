import { Component } from '@angular/core';
import { DatosEscuela, Escuela } from '../../interfaces/escuela.interface';
import { Router } from '@angular/router';
import { personalService } from '../../services/plantilla-personal.service';

@Component({
  selector: 'app-catalogo-centros-trabajo',
  templateUrl: './catalogo-centros-trabajo.component.html',
  styleUrl: './catalogo-centros-trabajo.component.css'
})
export class CatalogoCentrosTrabajoComponent {
  constructor(private route: Router, private service: personalService) { }

  public error:boolean=false;
  public loader: boolean = false;
  public centrosTrabajo: DatosEscuela[] = [];
  public busqueda:string=""


  redireccionarAPlantillaPersonal(cct: string) {
    this.route.navigate(['cct/plantilla/'.concat(cct)])

  }

  ngOnInit(){
    this.centrosTrabajo= this.service.cacheStorage.byCatalogoCct.Ccts
    this.busqueda=this.service.cacheStorage.byCatalogoCct.Busqueda
  }

  buscarCentros(search: string) {
    this.loader = true;
    this.error=false;
    this.centrosTrabajo = []
    this.service.obtenerCatalogoCCT(search).subscribe(
      response => {
        if (response.error || response.data.length ===0) {
          this.error=true;
          this.loader = false
        }else{
          this.centrosTrabajo = response.data;
          this.loader = false
          console.log(this.centrosTrabajo)
        }
        
       
      },
      error => {
        this.loader=false
      this.error=true
      }
    )
  }

}
