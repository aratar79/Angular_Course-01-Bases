import { HtmlParser } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

  Heroes: string[] = ['IronMan','SpiderMan','MusulMan','SuperMan'];
  HeroeBorrado: string = '';

  borrarHeroe(): void {
    this.HeroeBorrado = this.Heroes.shift() || '';
  }
}
