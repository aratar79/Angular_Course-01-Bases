import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  Personajes: Personaje[] = [ { nombre: 'Vegeta', poder: 8000 }];

  nuevo: Personaje = { nombre: 'Goku', poder: 150000 };

  
}
