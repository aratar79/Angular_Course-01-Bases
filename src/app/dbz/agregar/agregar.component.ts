import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();
  constructor(private dbzService: DbzService) {}

  agregar() {

    if (this.nuevo.nombre.trim().length === 0 && this.nuevo.poder === 0) {
      return;
    }
    
    this.dbzService.agregarPersonaje(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);
    //console.log(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };

  }


}
