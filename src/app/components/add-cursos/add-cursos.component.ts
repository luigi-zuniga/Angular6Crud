import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../Services/curso.service';
import { CursoInterface } from '../../models/cursoInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.css']
})
export class AddCursosComponent implements OnInit {
  /*Creacion de Propiedades del tipo Interface*/
  curso: CursoInterface = {
    nombre: '',
    formador: '',
    precio: '',
    idioma: '',
    tecnologia: '',
    fecha: '',
    descripcion: ''
  };

  /**Inyeccion del servicio en el metodo contructor*/
  constructor(private cursoService: CursoService) {}

  ngOnInit() {
  }
  /** Creacion del metodo para guardar el curso, dandole la directiva del formulario ngForm*/
  onGuardarCurso(myForm: NgForm) {
    const FechaNow = Date.now();
    this.curso.fecha = FechaNow;

    /*Enviamos al metodo addCurso de nuestro Service (curso.Servise) la propiedad curso*/
    this.cursoService.addCursos(this.curso);
  }


}
