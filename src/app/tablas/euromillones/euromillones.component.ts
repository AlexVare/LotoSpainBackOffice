import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bote } from 'src/app/models/bote.interface';
import { EuromillonesInterface } from 'src/app/models/euromillones.interface';
import { DEuromillonesComponent } from 'src/app/resultados/d-euromillones/d-euromillones.component';

@Component({
  selector: 'app-euromillones',
  templateUrl: './euromillones.component.html',
  styleUrls: ['./euromillones.component.scss']
})
export class EuromillonesComponent {
  pageNumber: number = 1;
  pageSize: number = 5;
  numeros!: number[];
  bonoloto: EuromillonesInterface[] = [
    {
      fecha: new Date(),
      combi: [1, 2, 3, 4, 5],
      estrellas: [5,3]
    },
    {
      fecha: new Date(),
      combi: [1, 2, 3, 4, 5],
      estrellas: [5,3]
    },
    {
      fecha: new Date(),
      combi: [1, 2, 3, 4, 5],
      estrellas: [5,3]
    },
    {
      fecha: new Date(),
      combi: [1, 2, 3, 4, 5],
      estrellas: [5,3]
    },
    {
      fecha: new Date(),
      combi: [1, 2, 3, 4, 5],
      estrellas: [5,3]
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
    const dialogRef = this.dialog.open(DEuromillonesComponent, {});
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
