import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [ { nombre: 'Vegeta', poder: 8000 }];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log('Servicio inicializado');
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}