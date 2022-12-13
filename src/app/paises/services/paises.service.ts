import { Pais, PaisSmall } from './../interfaces/paises.interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = 'https://restcountries.com/v2'

  private _regiones: String[] = ['Africa','America','Asia','Europe','Oceania'];

  get regiones(): String[]{
    return [...this._regiones]//retornar nuevo arreglo destructurado para poder modificar sin dañar el array de regiones principal
  }

  constructor(private http:HttpClient) { }

  getPaisesPorRegion(continente:string):Observable<PaisSmall[]> {debugger

    if(continente=='america'){
      continente='americas'
      const url: string  = `${this.baseUrl}/region/${continente}`
      return this.http.get<PaisSmall[]>(url);
    }
    const url: string  = `${this.baseUrl}/region/${continente}`
    return this.http.get<PaisSmall[]>(url);
  }

  getPaisesPorcodigo(codigo:string):Observable<Pais | null> {debugger

    if(!codigo){
      return of(null)
    }

    const url: string  = `${this.baseUrl}/alpha/${codigo}`
    return this.http.get<Pais>(url);
  }

  getPaisesPorSmall(codigo:string):Observable<PaisSmall> {debugger

    const url: string  = `${this.baseUrl}/alpha/${codigo}`
    return this.http.get<PaisSmall>(url);
  }

  getPaisesPorCodigosAdicional(borders:string[]):Observable<PaisSmall[]> {debugger

    if(!borders){
      return of([])
    }

    const peticiones:Observable<PaisSmall>[]=[];
    borders.forEach(codigo => {
      const peticion =this.getPaisesPorSmall(codigo);
      peticiones.push(peticion);
    })
  }
}
