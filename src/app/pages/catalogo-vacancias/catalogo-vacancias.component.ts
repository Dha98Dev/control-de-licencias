import { Component } from '@angular/core';
import { dataPruevaVacancia } from '../../interfaces/escuela.interface';

@Component({
  selector: 'app-catalogo-vacancias',
  templateUrl: './catalogo-vacancias.component.html',
  styleUrl: './catalogo-vacancias.component.css'
})
export class CatalogoVacanciasComponent {


public dataPrueba:dataPruevaVacancia[]=
[
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '},
  {nombre:'juan garcia martinez',vigencia: '19/11/2026', cct:'18dcc001we',funcion: 'maestro', plaza:'12300 0030', status: 'activo, '}
]

}
