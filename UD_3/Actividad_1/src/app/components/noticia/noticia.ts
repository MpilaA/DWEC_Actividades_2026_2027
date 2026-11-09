import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia';


@Component({
  imports: [],
  selector: 'app-noticia',
  styleUrl: './noticia.css',
  templateUrl: './noticia.html',
})
export class Noticia {
  @Input() noticia: INoticia;

  constructor () {
    this.noticia = {
      titulo: "Titulo",
      imagen: "",
      cuerpo: "Cuerpo",
      fechaPublicacion: new Date()
    }
  }
}
