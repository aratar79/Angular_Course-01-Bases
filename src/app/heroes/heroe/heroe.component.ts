import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['heroe.component.scss']
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }
    retornarNombre(): string {
        
        return `${this.nombre}, ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}