import { Component, signal} from '@angular/core';
import { INoticia } from './interfaces/inoticia';
import { Noticia } from './components/noticia/noticia';
import { Formulario } from './components/formulario/formulario';

// import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Noticia, Formulario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Queso');

  private noticias: INoticia[];

  constructor () {
    this.noticias = [];

    this.noticias.push(
      {
        titulo: "Gatos aprenden a hablar francés",
        imagen: "https://www.svgrepo.com/download/527635/cat.svg",
        cuerpo: "Una colonia de gatos en París ha comenzado a pedir sus croquetas usando un francés perfecto.",
        fechaPublicacion:new Date("2026-10-29"),
      }, 
      {
        titulo: "Descubren ciudad de queso en la Luna",
        imagen: "https://www.svgrepo.com/download/217393/cheese.svg",
        cuerpo: "Un telescopio detectó que el cráter más grande de la Luna es en realidad un trozo de queso brie.",
        fechaPublicacion:new Date("2026-11-15"),
      }
    );

  }

  anadirNoticia(noticia: INoticia) {
    this.noticias.push(noticia);
  }

}
