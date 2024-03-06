import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-d-gordo',
  templateUrl: './d-gordo.component.html',
  styleUrls: ['./d-gordo.component.scss'],
})
export class DGordoComponent {
  publicacionForm!: FormGroup;

  nombre!: string;
  numero!: string;
  combs: number[] = [];
  numeros: number[] = [];
  numerosE: number[] = [];
  seleccionados: number[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.publicacionForm = this.formBuilder.group({
      fecha: [null, Validators.required],
      numero: [null, Validators.required],
      comb1: [null, Validators.required],
      comb2: [null, Validators.required],
      comb3: [null, Validators.required],
      comb4: [null, Validators.required],
      comb5: [null, Validators.required],
      clave: [null, Validators.required],
    });
    this.numeros = Array.from({ length: 54 }, (_, i) => i + 1);
    this.numerosE = Array.from({ length: 10 }, (_, i) => i);
  }

  onSubmit(arg0: any, arg1: any, arg2: any) {
    throw new Error('Method not implemented.');
  }

  closeDialog() {
    throw new Error('Method not implemented.');
  }
  agregarFecha(){
    var hoy =new Date();
    console.log(hoy);
    const diaSegundos= 24*60*60*1000;
    var ayer= new Date(hoy.getTime()-diaSegundos);
    console.log(ayer);
    this.publicacionForm.patchValue({ fecha: ayer },{ onlySelf: true, emitEvent: false });
  }
}
