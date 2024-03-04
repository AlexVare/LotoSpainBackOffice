import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-d-euromillones',
  templateUrl: './d-euromillones.component.html',
  styleUrls: ['./d-euromillones.component.scss']
})
export class DEuromillonesComponent {
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
      comp: [null, Validators.required],
      reintegro: [null, Validators.required],
    });
    this.numeros = Array.from({ length: 50 }, (_, i) => i + 1);
    this.numerosE = Array.from({ length: 12 }, (_, i) => i + 1);
  }

  onSubmit(arg0: any, arg1: any, arg2: any) {
    throw new Error('Method not implemented.');
  }

  closeDialog() {
    throw new Error('Method not implemented.');
  }
}
