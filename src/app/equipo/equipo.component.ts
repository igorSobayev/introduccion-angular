import { Component, OnInit } from '@angular/core';
// Importamos estas dos clases para trabajar con ellas en el constructor
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  // Creamos el array vacío para llenarlo
  equipo:any[] = [];

  // Declaramos dos variables, una es la ruta y la otra es el servicio
  // subscribe es un callback
  constructor(private ruta:ActivatedRoute, private _servicio:EquipoService) {
    this.ruta.params.subscribe(params => {
      console.log(params['id']);
      this.equipo = this._servicio.obtenerUno(params['id']);
    })
   }

  ngOnInit() {
  }

}
