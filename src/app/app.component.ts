import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = true;
  cursos:string[] = ['HTML', 'ANGULAR', 'PHP'];
  animales:Array<any> = [
    {tipo: 'Perro', nombre: 'Shadow', edad: 2},
    {tipo: 'Gato', nombre: 'Pushy', edad: 9},
    {tipo: 'Araña', nombre: 'Pelusa', edad: 1}
  ]
}
