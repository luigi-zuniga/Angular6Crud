import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { cursoInterface } from '../models/cursoInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursosCollection: AngularFirestoreCollection<cursoInterface>;
  cursos: Observable<cursoInterface[]>;
  cursoDoc: AngularFirestoreDocument<cursoInterface>;

  constructor(public afs: AngularFirestore) { 
    this.cursos = afs.collection('cursos').valueChanges();
  }

  getCursos(){
    return this.cursos;
  }
}
