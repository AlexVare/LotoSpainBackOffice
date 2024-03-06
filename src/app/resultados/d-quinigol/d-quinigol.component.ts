import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-d-quinigol',
  templateUrl: './d-quinigol.component.html',
  styleUrls: ['./d-quinigol.component.scss']
})
export class DQuinigolComponent {
  publicacionForm!: FormGroup;

  nombre!: string;
  numero!: string;
  combs: number[] = [];
  numeros: number[] = [];
  numerosC: number[] = [];
  numerosR: number[] = [];


  constructor(private formBuilder: FormBuilder) {
    this.publicacionForm = this.formBuilder.group({

      fecha: [null, Validators.required],
      numero: [null, Validators.required],
      equipo11: [null, Validators.required],
      equipo21: [null, Validators.required],
      marcador11: [null, Validators.required],
      marcador21: [null, Validators.required],
      equipo12: [null, Validators.required],
      equipo22: [null, Validators.required],
      marcador12: [null, Validators.required],
      marcador22: [null, Validators.required],
      equipo13: [null, Validators.required],
      equipo23: [null, Validators.required],
      marcador13: [null, Validators.required],
      marcador23: [null, Validators.required],
      equipo14: [null, Validators.required],
      equipo24: [null, Validators.required],
      marcador14: [null, Validators.required],
      marcador24: [null, Validators.required],
      equipo15: [null, Validators.required],
      equipo25: [null, Validators.required],
      marcador15: [null, Validators.required],
      marcador25: [null, Validators.required],
      equipo16: [null, Validators.required],
      equipo26: [null, Validators.required],
      marcador16: [null, Validators.required],
      marcador26: [null, Validators.required],
    });
    this.numeros = Array.from({ length: 6 }, (_, i) => i + 1);
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
