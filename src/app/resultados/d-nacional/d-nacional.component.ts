import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-d-nacional',
  templateUrl: './d-nacional.component.html',
  styleUrls: ['./d-nacional.component.scss'],
})
export class DNacionalComponent {
  publicacionForm!: FormGroup;


  combs: number[] = [];
  numeros: number[] = [];
  numerosE: number[] = [];
  seleccionados: number[] = [];
  tipo: string[] = ['Jueves', 'Sábado', 'Extraordinario'];
  extra: boolean=false;

  constructor(private formBuilder: FormBuilder) {
    this.publicacionForm = this.formBuilder.group({
      fecha: [null, Validators.required],
      numero: [null, Validators.required],
      tipo: [null, Validators.required],
      ganador1: [null, Validators.required],
      ganador2: [null, Validators.required],
      reint1: [null, Validators.required],
      reint2: [null, Validators.required],
      reint3: [null, Validators.required],
      nombreExtra: [null, Validators.required],
    });
    this.numerosE = Array.from({ length: 10 }, (_, i) => i);
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  closeDialog() {
    throw new Error('Method not implemented.');
  }

  comprobarExtra(){
    console.log(this.publicacionForm.get('tipo')?.value);
    console.log(this.extra);
    if (this.publicacionForm.get('tipo')?.value?.toLowerCase() === "extraordinario") {
      this.extra=true;
      console.log(this.extra);
    } else {
      this.extra=false;
    }
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
