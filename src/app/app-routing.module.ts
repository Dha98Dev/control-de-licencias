import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoCentrosTrabajoComponent } from './pages/catalogo-centros-trabajo/catalogo-centros-trabajo.component';
import { EscuelaPlantillaTrabajoComponent } from './pages/escuela-plantilla-trabajo/escuela-plantilla-trabajo.component';
import { DetailsPersonComponent } from './pages/details-person/details-person.component';
import { FormLicenciaComponent } from './components/form-licencia/form-licencia.component';
import { CatalogoVacanciasComponent } from './pages/catalogo-vacancias/catalogo-vacancias.component';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  {
    path:'',
  component:LoginComponent
  },
  {
    path:'cct',
    component:CatalogoCentrosTrabajoComponent
  },
  {
    path:'cct/plantilla/:id',
    component:EscuelaPlantillaTrabajoComponent
  },
  {
    path:'personDetails',
    component:DetailsPersonComponent,
    children:[
      {
        path:'generarLicencia',
        component:FormLicenciaComponent
      }
    ]

  },
  {
    path:'vacancias',
    component:CatalogoVacanciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
