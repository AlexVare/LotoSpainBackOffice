import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BPrimitivaComponent } from 'src/app/botes/b-primitiva/b-primitiva.component';
import { Bote } from 'src/app/models/bote.interface';
import { PrimitivaInterface } from 'src/app/models/primitiva.interface';
import { DPrimitivaComponent } from 'src/app/resultados/d-primitiva/d-primitiva.component';

@Component({
  selector: 'app-primitiva',
  templateUrl: './primitiva.component.html',
  styleUrls: ['./primitiva.component.scss']
})
export class PrimitivaComponent {
  pageNumber: number = 1;
  pageSize: number = 5;
  numeros!: number[];
  bonoloto: PrimitivaInterface[] = [
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      comp: 5,
      reint: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      comp: 5,
      reint: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      comp: 5,
      reint: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      comp: 5,
      reint: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      comp: 5,
      reint: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5, 6],
      comp: 5,
      reint: 7,
    },
  ];
  botes: Bote[] = [
    {
      fecha: new Date(),
      cuantia: 300000,
    },
    {
      fecha: new Date(),
      cuantia: 1300000,
    },
    {
      fecha: new Date(),
      cuantia: 2300000,
    },
  ];

  constructor(public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {}

  generarBote() {
    const dialogRef = this.dialog.open(BPrimitivaComponent, {});
    console.log('Producto nuevo');

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }

  generarGanador() {
    const dialogRef = this.dialog.open(DPrimitivaComponent, {});
    console.log('Producto nuevo');

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }

  millones(cuantia: number): string {
    if (cuantia / 1000000 > 1) {
      return cuantia / 1000000 + ' MILLONES DE EUROS';
    } else {
      return cuantia+"€";
    }
  }
}
