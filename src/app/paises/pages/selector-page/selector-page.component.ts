import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall } from '../../interfaces/paises.interfaces';
import { tap,switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  //selectores
  regiones: String[] = [];
  paises: PaisSmall[] = [];
  fronteras:string[]=[];
  fronteraSmall:string[]=[];//para trabajar el cambio del codigo por nombre

  miFormulario:FormGroup = this.fb.group({
    continente:['',Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]//disable en formulario reactivo se puede hacer desde aca {value:'',}
  })

  //UI
  cargando:boolean=false;

  constructor(private fb: FormBuilder, private _paises: PaisesService) { }

  ngOnInit(): void {
    this.regiones = this._paises.regiones;

    //cambio de region
    //en el primer subscribe se obtiene el valor seleccion desde el selector y se manda al segundo subscribe donde obtendra los paises de la region

    /*this.miFormulario.get('continente')?.valueChanges.subscribe(
      continente => {
        console.log(continente);

        this._paises.getPaisesPorRegion(continente).subscribe(
          paises =>{
            console.log(paises);
            this.paises=paises
          })
      })*/

    //misma funcion del codigo anterior pero con reset de formulario
    this.miFormulario.get('continente')?.valueChanges.pipe(
      tap(( _ ) =>{
        this.miFormulario.get('pais')?.reset('');
        this.cargando = true;
      }),
      switchMap( continente => this._paises.getPaisesPorRegion(continente))
    ).subscribe(paises =>{
      this.paises=paises
    })

    //fronteras
    this.miFormulario.get('pais')?.valueChanges
    .pipe(
      tap(( _ ) =>{
        this.fronteras=[];
        this.miFormulario.get('frontera')?.reset('');
      }),
      switchMap( codigo => this._paises.getPaisesPorcodigo( codigo ))
    )
    .subscribe(
      pais => {
        this.fronteras=pais?.borders || [];
        this.cargando=false;
      }
    )

  }

  guardar(){
    console.log(this.miFormulario.value);
  }

}


