import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuinigolInterface } from 'src/app/models/quinigol.interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {
  constructor(private dialogRef: MatDialogRef<DetallesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuinigolInterface){}

  obtenerResultado(cadena: string): string {
    var division: string[] = cadena.split('-');
    if (parseInt(division[0]) >= 3) {
      division[0]="M";
    }
    if (parseInt(division[1]) >= 3) {
      division[1]="M";
    }
    return division[0]+"-"+division[1];
  }
  // obtenerResultado(cadena: string): string {
  //   var division: string[] = cadena.split('-');
  //   if (parseInt(division[0]) > parseInt(division[1])) {
  //     return '1';
  //   } else if (parseInt(division[0]) == parseInt(division[1])) {
  //     return 'X';
  //   } else {
  //     return '2';
  //   }
  // }
}
