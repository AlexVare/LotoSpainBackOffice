import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-b-euromillones',
  templateUrl: './b-euromillones.component.html',
  styleUrls: ['./b-euromillones.component.scss']
})
export class BEuromillonesComponent {
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
