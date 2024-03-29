import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoteInterface } from 'src/app/models/bote.interface';
import { DEurodreamsComponent } from 'src/app/resultados/d-eurodreams/d-eurodreams.component';
import { EurodreamsInterface } from 'src/app/models/eurodreams.interface';
import { BEurodreamsComponent } from 'src/app/botes/b-eurodreams/b-eurodreams.component';

@Component({
  selector: 'app-eurodreams',
  templateUrl: './eurodreams.component.html',
  styleUrls: ['./eurodreams.component.scss']
})
export class EurodreamsComponent {
  pageNumber: number = 1;
  pageSize: number = 5;
  numeros!: number[];
  bonoloto: EurodreamsInterface[] = [
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      suenho: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      suenho: 5,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      suenho: 5,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      suenho: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      suenho: 7,
    },
    {
      fecha: new Date(),
      sorteo: 2,
      combi: [1, 2, 3, 4, 5],
      suenho: 5,
    },
  ];
  botes: BoteInterface[] = [
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
    const dialogRef = this.dialog.open(DEurodreamsComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }

  generarBote() {
    const dialogRef = this.dialog.open(BEurodreamsComponent, {});

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
