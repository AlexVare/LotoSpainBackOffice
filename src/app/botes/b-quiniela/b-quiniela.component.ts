import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-b-quiniela',
  templateUrl: './b-quiniela.component.html',
  styleUrls: ['./b-quiniela.component.scss']
})
export class BQuinielaComponent {
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
