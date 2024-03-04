import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-d-bonoloto',
  templateUrl: './d-bonoloto.component.html',
  styleUrls: ['./d-bonoloto.component.scss'],
})
export class DBonolotoComponent {
  publicacionForm!: FormGroup;

  nombre!: string;
  numero!: string;
  combs: number[] = [];
  numeros: number[] = [];
  numerosE: number[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.publicacionForm = this.formBuilder.group({

      numero: [null, Validators.required],
      comb1: [null, Validators.required],
      comb2: [null, Validators.required],
      comb3: [null, Validators.required],
      comb4: [null, Validators.required],
      comb5: [null, Validators.required],
      comb6: [null, Validators.required],
      comp: [null, Validators.required],
      reintegro: [null, Validators.required],
    });
    this.numeros = Array.from({ length: 49 }, (_, i) => i + 1); // Rango de números del 1 al 49
    this.numerosE = Array.from({ length: 9 }, (_, i) => i + 1); // Rango de números del 1 al 49
  }

  onSubmit(arg0: any, arg1: any, arg2: any) {
    throw new Error('Method not implemented.');
  }

  closeDialog() {
    throw new Error('Method not implemented.');
  }

}
