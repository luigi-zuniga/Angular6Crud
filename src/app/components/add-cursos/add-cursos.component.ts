import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../Services/curso.service';
import { ToasterServiceService } from '../../Services/toaster-service.service';
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
  constructor(private cursoService: CursoService, private toasterServiceService: ToasterServiceService) { }

  Success() {
    this.toasterServiceService.Success("Datos añadidos satisfactoriamente");
  }

  Info() {
    this.toasterServiceService.info("Rellene los datos del formulario");
  }

  Warning() {
    this.toasterServiceService.Warning("Warning button presionado");
  }

  Error() {
    this.toasterServiceService.Error("Error button preisonado");
  }

  ngOnInit() {
  }
  /** Creacion del metodo para guardar el curso, dandole la directiva del formulario ngForm*/
  onGuardarCurso(myForm: NgForm) {
    /**Hacemos las comprobacion si los datos del formulario son validos */
    if (myForm.valid == true) {
      const FechaNow = Date.now();
      this.curso.fecha = FechaNow;

      /*Enviamos al metodo addCurso de nuestro Service (curso.Servise) la propiedad curso*/
      this.cursoService.addCursos(this.curso);
      /**Reseteamos el formulario */
      myForm.resetForm();
      this.Success();

    } else {
      this.Info();
    }
  }

}
