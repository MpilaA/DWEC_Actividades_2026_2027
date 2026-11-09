import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {

  noticia : INoticia;
  @Output() emitirNoticia = new EventEmitter();

  constructor() {
    this.noticia = {
      titulo: "",
      imagen: "",
      cuerpo: "",
      fechaPublicacion: new Date (Number.MIN_VALUE)
    };
  }

  enviarNoticia() {
    if (
      this.noticia.titulo != "" && 
      this.noticia.imagen != "" && 
      this.noticia.cuerpo != ""
      // Para la fecha no he encontrado forma de validarle.
      // Aun asi hay una fecha por defecto
    ) {

      this.emitirNoticia.emit(this.noticia); 

      console.log(this.noticia);

      this.noticia = {
        titulo: "",
        imagen: "",
        cuerpo: "",
        fechaPublicacion: new Date (Number.MIN_VALUE)
      };
    }
    
  }
}
