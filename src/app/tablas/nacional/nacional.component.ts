import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BNacionalComponent } from 'src/app/botes/b-nacional/b-nacional.component';
import { BoteInterface } from 'src/app/models/bote.interface';
import { BoteNacionalInterface } from 'src/app/models/boteNacional.interface';
import { NacionalInterface } from 'src/app/models/nacional.inerface';
import { DNacionalComponent } from 'src/app/resultados/d-nacional/d-nacional.component';

@Component({
  selector: 'app-nacional',
  templateUrl: './nacional.component.html',
  styleUrls: ['./nacional.component.scss']
})
export class NacionalComponent {
  pageNumber: number = 1;
  pageSize: number = 5;
  numeros!: number[];
  bonoloto: NacionalInterface[] = [
    {
      fecha: new Date(),
      tipo: "jueves",
      primero: "98765",
      segundo: "12345",
      reintegros: [1, 2, 3],
    },
    {
      fecha: new Date(),
      tipo: "sábado",
      primero: "98765",
      segundo: "12345",
      reintegros: [1, 2, 3],
    },
    {
      fecha: new Date(),
      tipo: "extraordinario",
      extra: "Sorteo del día del padre",
      primero: "98765",
      segundo: "12345",
      reintegros: [1, 2, 3],
    },
    {
      fecha: new Date(),
      tipo: "jueves",
      primero: "98765",
      segundo: "12345",
      reintegros: [1, 2, 3],
    },
    {
      fecha: new Date(),
      tipo: "sábado",
      primero: "98765",
      segundo: "12345",
      reintegros: [1, 2, 3],
    },
    {
      fecha: new Date(),
      tipo: "jueves",
      primero: "98765",
      segundo: "12345",
      reintegros: [1, 2, 3],
    },
  ];
  botes: BoteNacionalInterface[] = [
    {
      bote:{
        fecha: new Date,
        cuantia: 30000
      },
      tipo: "jueves",
    },
    {
      bote:{
        fecha: new Date,
        cuantia: 200000
      },
      tipo: "sabado",
    },
    {
      bote:{
        fecha: new Date,
        cuantia: 1300000
      },
      tipo: "jueves",
    },
    {
      bote:{
        fecha: new Date,
        cuantia: 0
      },
      tipo: "extraordinario",
      nombreExtra: "Sorteo del día del padre"
    },

  ];

  constructor(public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {}

  generarGanador() {
    const dialogRef = this.dialog.open(DNacionalComponent, {});
    console.log('Producto nuevo');

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }

  generarBote() {
    const dialogRef = this.dialog.open(BNacionalComponent, {});
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
