import { Component, OnInit } from '@angular/core';
import { cursoInterface } from '../../models/cursoInterface';
import { CursoService } from '../../Services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(private CursoService: CursoService) { }

  ngOnInit() {
      this.CursoService.getCursos().subscribe(cursos => {
        console.log(cursos);
      })
  }

}
