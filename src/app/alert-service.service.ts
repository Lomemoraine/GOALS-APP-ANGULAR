import { Injectable } from '@angular/core';

@Injectable()
export class AlertServiceService {
  alertMe(message:string){
    alert(message)
  }

  constructor() { }
}
