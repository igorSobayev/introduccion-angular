import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo: any[] = [
    {
      nombre: 'John Doe',
      especialidad: 'Desarrollador',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odio similique! Consequuntur rem blanditiis similique voluptates, corporis maiores doloremque cumque officiis illo quod libero illum animi tenetur atque vel.Dignissimos.'
    },
    {
      nombre: 'Jane Doe',
      especialidad: 'Diseñadora',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, odio similique! Consequuntur rem blanditiis similique voluptates, corporis maiores doloremque cumque officiis illo quod libero illum animi tenetur atque vel.Dignissimos.'
    }
  ]

  constructor() {
    console.log('funcionando service');
  }

  obtenerEquipo() {
    return this.equipo;
  }
}
