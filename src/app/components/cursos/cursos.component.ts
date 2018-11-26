import { Component, OnInit } from '@angular/core';
/**Importacion del modelo con todas sus propiedades CursoInterfase */
import { CursoInterface } from '../../models/cursoInterface';
/**Importacion de los servicios(metodos) para un CRUD e importacion de otras librerias */
import { CursoService } from '../../Services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  /*Creacion de la propiedad curso con un array de interface*/
  cursos: CursoInterface[];
  /**Creacion de la propiedad editState Para saber si se esta editando o no */
  editState: boolean = false;

  cursoToEdit: CursoInterface;

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
      this.cursoService.getCursos().subscribe(cursos => {
        // console.log(cursos);
        this.cursos = cursos;
      });
  }

  /*recibimos el evento y la propiedad curso de tipo cursoInterface */
  editCurso(evento, curso: CursoInterface) {
    this.editState = true;
    this.cursoToEdit = curso;
  }

  onUpdateCurso(curso: CursoInterface) {
    /**Enviamos el curso a actualizar a nuestro servicio */
    this.cursoService.updateCurso(curso);
    this.clearState();
  }

  deleteCurso(event, curso: CursoInterface) {
    this.cursoService.deleteCurso(curso);
    this.clearState();
  } 

  clearState() {
    this.editState = false;
    this.cursoToEdit = null;
  }
}
