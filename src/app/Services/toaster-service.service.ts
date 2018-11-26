import { Injectable } from '@angular/core';
declare var toastr:any
@Injectable({
  providedIn: 'root'
})
export class ToasterServiceService {

  constructor() { }

    Success(title :string, message?:string) {
        toastr.success(title, message);
    }


    Warning(title:string,message?:string,) {
        toastr.warning(title, message);
    }

    Error(message?:string, title?:string) {
      toastr.error(message, title);
  }
  
  info(message?:string) {
    toastr.info(message);
}

}
