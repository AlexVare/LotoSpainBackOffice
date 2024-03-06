import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-b-quintuple',
  templateUrl: './b-quintuple.component.html',
  styleUrls: ['./b-quintuple.component.scss']
})
export class BQuintupleComponent {
  publicacionForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.publicacionForm = this.formBuilder.group({

      fecha: [null, Validators.required],
      numero: [null, Validators.required],
    });
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  closeDialog() {
    throw new Error('Method not implemented.');
  }

  agregarFecha(){
    var hoy =new Date();
    this.publicacionForm.patchValue({ fecha: hoy },{ onlySelf: true, emitEvent: false });
  }
}
