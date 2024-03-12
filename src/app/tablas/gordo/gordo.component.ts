import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bote } from 'src/app/models/bote.interface';
import { GordoInterface } from 'src/app/models/gordo.interface';
import { DGordoComponent } from 'src/app/resultados/d-gordo/d-gordo.component';

@Component({
  selector: 'app-gordo',
  templateUrl: './gordo.component.html',
  styleUrls: ['./gordo.component.scss']
})
export class GordoComponent {
  pageNumber: number = 1;
  pageSize: number = 5;
  numeros!: number[];
  bonoloto: GordoInterface[] = [
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      clave: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      clave: 5,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      clave: 5,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      clave: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      clave: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      clave: 5,
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

  todoCero() {
    console.log('Todo a cero');
  }

  generarProducto() {
    const dialogRef = this.dialog.open(DGordoComponent, {});
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
