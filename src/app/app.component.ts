import { Component } from '@angular/core';
import { ToasterServiceService } from './Services/toaster-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Componente</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular & Firabase';
  constructor(private toasterServiceService:ToasterServiceService) {

  }

  Success(){
      this.toasterServiceService.Success("Succed button presionado");
  }
  Info(){
      this.toasterServiceService.info("info button presionado");
  }

  Warning(){
    this.toasterServiceService.Warning("Warning button presionado");
  }

  Error(){
    this.toasterServiceService.Error("Error button preisonado");
  }
}
