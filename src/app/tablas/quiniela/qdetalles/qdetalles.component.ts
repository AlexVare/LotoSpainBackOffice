import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuinielaInterface } from 'src/app/models/quiniela.interface';

@Component({
  selector: 'app-qdetalles',
  templateUrl: './qdetalles.component.html',
  styleUrls: ['./qdetalles.component.scss']
})
export class QdetallesComponent {
  constructor(private dialogRef: MatDialogRef<QdetallesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: QuinielaInterface){}

    obtenerResultado(cadena: string): string {
        var division: string[] = cadena.split('-');
        if (parseInt(division[0]) > parseInt(division[1])) {
          return '1';
        } else if (parseInt(division[0]) == parseInt(division[1])) {
          return 'X';
        } else {
          return '2';
        }
      }
      obtenerPleno(cadena: string): string {
        var division: string[] = cadena.split('-');
        if (parseInt(division[0]) >= 3) {
          division[0]="M";
        }
        if (parseInt(division[1]) >= 3) {
          division[1]="M";
        }
        return division[0]+"-"+division[1];
      }
}
