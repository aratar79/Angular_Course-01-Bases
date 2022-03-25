import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  @Input() Personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }


  agregar() {

    if (this.nuevo.nombre.trim().length === 0 && this.nuevo.poder === 0) {
      return;
    }

    this.Personajes.push(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }


}
