import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { InterfazBoleto } from 'src/app/models/boletoInterface';
import { Bote } from 'src/app/models/bote.interface';
import { BonolotoInterface } from 'src/app/models/bonoloto.interface';
import { ProductService } from 'src/app/services/product-service.service';
import { DBonolotoComponent } from 'src/app/resultados/d-bonoloto/d-bonoloto.component';
import { BBonolotoComponent } from 'src/app/botes/b-bonoloto/b-bonoloto.component';

@Component({
  selector: 'app-bonoloto',
  templateUrl: './bonoloto.component.html',
  styleUrls: [
    './bonoloto.component.scss',
    './queries/bonoloto.component-mobile.scss',
  ],
})
export class BonolotoComponent implements OnInit {
  pageNumber: number = 1;
  pageSize: number = 5;
  numeros!: number[];
  bonoloto: BonolotoInterface[] = [
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

  generarGanador() {
    const dialogRef = this.dialog.open(DBonolotoComponent, {});
    console.log('Producto nuevo');

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }

  generarBote() {
    const dialogRef = this.dialog.open(BBonolotoComponent, {});
    console.log('Producto nuevo');

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
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
