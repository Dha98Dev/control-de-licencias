import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosEscuela, Respuesta, RespuestaDatosEscuela, cacheStorage } from '../interfaces/escuela.interface';
import { Data } from '@angular/router';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { error } from 'jquery';

@Injectable({ providedIn: 'root' })
export class personalService {
  constructor(private http: HttpClient) {
    this.loadFromLocalStorage()
  }


  // declaramos las url de los web services 
  private apiGetPersonas: string = "https://estadistica2.sepen.gob.mx/ws_f911/index.php/Personas/getPersonas"
  private apiGetCct: string = "https://estadistica2.sepen.gob.mx/ws_f911/index.php/f911s/getCCT"
  private apiGetCatalogoCct: string = "https://estadistica2.sepen.gob.mx/ws_f911/index.php/f911s/getCatalogoCCT"


  // creamos un metodo para guardar en local storage la informacion de los centros de trabajo
  saveToLocalStorage(): void {
    localStorage.setItem('cacheStogare', JSON.stringify(this.cacheStorage))
  }

  // creamos el metodo para cargar del local storage 

  loadFromLocalStorage(): void {
    if (!localStorage.getItem('cacheStogare')) return;
    this.cacheStorage = JSON.parse(localStorage.getItem('cacheStorage')!)
  }

  // creamos el objeto de cache stogare para guardar la informacion

  public cacheStorage: cacheStorage = {
    byCatalogoCct: { Busqueda: '', Ccts: [] }
  }

  // creamos la funcion que hara la peticion http para obtener al personal de un centro de trabajo
  obtenerPersonal(cct: string) {
    const formData = new FormData();  //creamos una instancia de formData
    formData.append('cct', cct); // le pasamos el parametro que espera el api
    return this.http.post<Respuesta>(this.apiGetPersonas, formData).pipe(
      catchError(this.handleError)
    )
  }


  // creamos la funcion que hara la peticion para obtener la informacion del centro de trabajo
  obtenerCentroTrabajo(cct: string): Observable<RespuestaDatosEscuela> {
    const formData = new FormData;
    formData.append('cct', cct)
    return this.http.post<RespuestaDatosEscuela>(this.apiGetCct, formData).pipe(
      catchError(this.handleError)
    )

  }

  obtenerCatalogoCCT(search: string): Observable<RespuestaDatosEscuela> {

    const formData = new FormData;
    formData.append('cct', search);
    return this.http.post<RespuestaDatosEscuela>(this.apiGetCatalogoCct, formData).pipe(
      tap(Ccts => {
        this.cacheStorage.byCatalogoCct = { Busqueda: search, Ccts: Ccts.data }
      }
      ),
      tap(() => this.saveToLocalStorage()),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // El servidor devolvió un código de error
      errorMessage = `Código de error ${error.status}, mensaje: ${error.error}`;
    }
    // Devuelve un observable que emite el error para que el flujo continúe
    return throwError(errorMessage);
  }
}
