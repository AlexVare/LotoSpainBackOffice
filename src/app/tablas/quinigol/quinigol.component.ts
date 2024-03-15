import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BQuinigolComponent } from 'src/app/botes/b-quinigol/b-quinigol.component';
import { BoteInterface } from 'src/app/models/bote.interface';
import { QuinigolInterface } from 'src/app/models/quinigol.interface';
import { DQuinigolComponent } from 'src/app/resultados/d-quinigol/d-quinigol.component';
import { DetallesComponent } from './detalles/detalles.component';

@Component({
  selector: 'app-quinigol',
  templateUrl: './quinigol.component.html',
  styleUrls: ['./quinigol.component.scss'],
})
export class QuinigolComponent {

  bonoloto: QuinigolInterface[] = [
    {
      fecha: new Date(),
      jornada: 6,
      partidos: [
        {
          local: 'Real Madrid',
          visitante: 'Barcelona',
          resultado: '0-0',
        },
        {
          local: 'Celta de Vigo',
          visitante: 'Sevilla',
          resultado: '3-0',
        },
        {
          local: 'Rayo Vallecano',
          visitante: 'Girona',
          resultado: '1-3',
        },
        {
          local: 'Lugo',
          visitante: 'Deportivo de la Coruña',
          resultado: '2-1',
        },
        {
          local: 'Athletic de Bilbao',
          visitante: 'Atlético de Madrid',
          resultado: '4-1',
        },
        {
          local: 'Pontevedra',
          visitante: 'Rápido de Bouzas',
          resultado: '2-2',
        },
      ],
    },
    {
      fecha: new Date(),
      jornada: 6,
      partidos: [
        {
          local: 'Real Madrid',
          visitante: 'Barcelona',
          resultado: '0-0',
        },
        {
          local: 'Celta de Vigo',
          visitante: 'Sevilla',
          resultado: '3-0',
        },
        {
          local: 'Rayo Vallecano',
          visitante: 'Girona',
          resultado: '1-3',
        },
        {
          local: 'Lugo',
          visitante: 'Deportivo de la Coruña',
          resultado: '2-1',
        },
        {
          local: 'Athletic de Bilbao',
          visitante: 'Atlético de Madrid',
          resultado: '4-1',
        },
        {
          local: 'Pontevedra',
          visitante: 'Rápido de Bouzas',
          resultado: '2-2',
        },
      ],
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
    const dialogRef = this.dialog.open(DQuinigolComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }

  generarBote() {
    const dialogRef = this.dialog.open(BQuinigolComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }

  millones(cuantia: number): string {
    if (cuantia / 1000000 > 1) {
      return cuantia / 1000000 + ' MILLONES DE EUROS';
    } else {
      return cuantia + '€';
    }
  }

  // obtenerResultado(cadena: string): string {
  //   var division: string[] = cadena.split('-');
  //   if (parseInt(division[0]) > parseInt(division[1])) {
  //     return '1';
  //   } else if (parseInt(division[0]) == parseInt(division[1])) {
  //     return 'X';
  //   }else{
  //     return "2";
  //   }
  // }

  obtenerResultado(cadena: string): string {
    var division: string[] = cadena.split('-');
    if (parseInt(division[0]) >= 3) {
      division[0]="M";
    }
    if (parseInt(division[1]) >= 3) {
      division[1]="M";
    }
    return division[0]+"-"+division[1];
  }

  abrirDetalles(jornada:QuinigolInterface){
    const dialogRef = this.dialog.open(DetallesComponent, {
      data:jornada
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      window.location.reload();
    });
  }
}
