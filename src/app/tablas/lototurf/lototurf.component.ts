import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BLototurfComponent } from 'src/app/botes/b-lototurf/b-lototurf.component';
import { BoteInterface } from 'src/app/models/bote.interface';
import { LototurfInterface } from 'src/app/models/lototurf.interface';
import { DLototurfComponent } from 'src/app/resultados/d-lototurf/d-lototurf.component';

@Component({
  selector: 'app-lototurf',
  templateUrl: './lototurf.component.html',
  styleUrls: ['./lototurf.component.scss']
})
export class LototurfComponent {
  pageNumber: number = 1;
  pageSize: number = 5;
  numeros!: number[];
  bonoloto: LototurfInterface[] = [
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      caballo: 5,
      reint: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      caballo: 5,
      reint: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      caballo: 5,
      reint: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      caballo: 5,
      reint: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      caballo: 5,
      reint: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      caballo: 5,
      reint: 7,
    },
  ];
  botes: BoteInterface[] = [
    {
      fecha: new Date(),
      sorteo: 3,
      cuantia: 1300000,
    },
    {
      fecha: new Date(),
      sorteo: 3,
      cuantia: 300000,
    },
    {
      fecha: new Date(),
      sorteo: 3,
      cuantia: 2340000,
    },
    {
      fecha: new Date(),
      sorteo: 3,
      cuantia: 33300000,
    },
  ];

  constructor(public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {}

  generarGanador() {
    const dialogRef = this.dialog.open(DLototurfComponent, {});
    console.log('Producto nuevo');

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }

  generarBote() {
    const dialogRef = this.dialog.open(BLototurfComponent, {});
    console.log('Producto nuevo');

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }

  cargaMasiva() {
    console.log('Carga masiva');
  }

  editBoleto() {}

  millones(cuantia: number): string {
    if (cuantia / 1000000 > 1) {
      return cuantia / 1000000 + ' MILLONES DE EUROS';
    } else {
      return cuantia+"€";
    }
  }
}
