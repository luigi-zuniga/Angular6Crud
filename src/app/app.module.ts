import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { FormsModule } from '@angular/forms';
import { CursoService } from './Services/curso.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AddCursosComponent } from './components/add-cursos/add-cursos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    AddCursosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angular6Crud'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
