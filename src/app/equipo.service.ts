import { Injectable } from '@angular/core';

// servicio del equipo para crear rutas dinámicas

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  // Array con la información de todos los miembros del equipo
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

  // Constructor del servicio
  constructor() {
    console.log('funcionando service');
  }

  // Función para obtener un equipo entero
  obtenerEquipo() {
    return this.equipo;
  }

  // Función para obtener el miembro de un equipo
  obtenerUno(i) {
    return this.equipo[i];
  }
}
