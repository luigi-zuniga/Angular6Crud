import { Injectable, CollectionChangeRecord } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { CursoInterface } from '../models/cursoInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Action } from 'rxjs/internal/scheduler/Action';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  cursosCollection: AngularFirestoreCollection<CursoInterface>;
  cursos: Observable<CursoInterface[]>;
  cursoDoc: AngularFirestoreDocument<CursoInterface>;

  constructor(public afs: AngularFirestore) {
    // this.cursos = afs.collection('cursos').valueChanges();
    /** Todo se encuentra en angularFire2 documentacion para obtener datos*/
    this.cursosCollection = afs.collection<CursoInterface>('cursos');
    this.cursos = this.cursosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as CursoInterface;
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
    );
  }

  getCursos() {
    return this.cursos;
  }

  addCursos(curso: CursoInterface) {
    console.log('Nuevo Curso Añadido');
    this.cursosCollection.add(curso);
  }

  /**Recibimos como parametro la propiedad curso */
  deleteCurso(curso: CursoInterface) {
    // console.log('delete Curso');
  }


  updateCurso(curso: CursoInterface) {
    // console.log('update Curso');
    /**Para actualizar tenemos que llamar al documento que vamos a actualizar */
    /**Los template literal no se usan con comillas simples
     * se debe indicar el nombre de la coleccion y el nombre de la variable
     */
    this.cursoDoc = this.afs.doc(`cursos/${curso.id}`);
    this.cursoDoc.update(curso);
  }
}
