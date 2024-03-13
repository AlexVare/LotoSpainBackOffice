import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BEuromillonesComponent } from 'src/app/botes/b-euromillones/b-euromillones.component';
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

  generarGanador() {
    const dialogRef = this.dialog.open(DEuromillonesComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }

  generarBote() {
    const dialogRef = this.dialog.open(BEuromillonesComponent, {});

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
