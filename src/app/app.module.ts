import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogoVacanciasComponent } from './pages/catalogo-vacancias/catalogo-vacancias.component';
import { CatalogoCentrosTrabajoComponent } from './pages/catalogo-centros-trabajo/catalogo-centros-trabajo.component';
import { TablaPlantillaPersonalComponent } from './components/tabla-plantilla-personal/tabla-plantilla-personal.component';
import { TablaCentrosTrabajosComponent } from './components/tabla-centros-trabajos/tabla-centros-trabajos.component';
import { EscuelaPlantillaTrabajoComponent } from './pages/escuela-plantilla-trabajo/escuela-plantilla-trabajo.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CardDatosEscuelaComponent } from './components/card-datos-escuela/card-datos-escuela.component';
import { CardDatosMaestroComponent } from './components/card-datos-maestro/card-datos-maestro.component';
import { DetailsPersonComponent } from './pages/details-person/details-person.component';
import { TablaPlazasComponent } from './components/tabla-plazas/tabla-plazas.component';
import { FormLicenciaComponent } from './components/form-licencia/form-licencia.component';
import { DataTablesModule } from 'angular-datatables';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogoVacanciasComponent,
    CatalogoCentrosTrabajoComponent,
    TablaPlantillaPersonalComponent,
    TablaCentrosTrabajosComponent,
    EscuelaPlantillaTrabajoComponent,
    LoaderComponent,
    CardDatosEscuelaComponent,
    CardDatosMaestroComponent,
    DetailsPersonComponent,
    TablaPlazasComponent,
    FormLicenciaComponent,
    SearchBoxComponent,
    AlertErrorComponent,
    LayoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
