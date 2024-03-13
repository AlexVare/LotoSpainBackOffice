import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BQuintupleComponent } from 'src/app/botes/b-quintuple/b-quintuple.component';
import { Bote } from 'src/app/models/bote.interface';
import { QuintupleInterface } from 'src/app/models/quintuple.interface';
import { DQuintupleComponent } from 'src/app/resultados/d-quintuple/d-quintuple.component';

@Component({
  selector: 'app-quintuple',
  templateUrl: './quintuple.component.html',
  styleUrls: ['./quintuple.component.scss']
})
export class QuintupleComponent {
  pageNumber: number = 1;
  pageSize: number = 5;
  numeros!: number[];
  bonoloto: QuintupleInterface[] = [
    {
      fecha: new Date(),
      jornada: 2,
      ganadores: ['01','02','10','05','03','01'],
    },
    {
      fecha: new Date(),
      jornada: 2,
      ganadores: ['01','02','10','05','03','01'],
    },
    {
      fecha: new Date(),
      jornada: 2,
      ganadores: ['01','02','10','05','03','01'],
    },
    {
      fecha: new Date(),
      jornada: 2,
      ganadores: ['01','02','10','05','03','01'],
    },
  ];
  botes: Bote[] = [
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

  todoCero() {
    console.log('Todo a cero');
  }

  generarGanador() {
    const dialogRef = this.dialog.open(DQuintupleComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }
  generarBote() {
    const dialogRef = this.dialog.open(BQuintupleComponent, {});

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
