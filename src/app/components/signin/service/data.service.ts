import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string):any{
    this.messageSource.next(message)
  }

  sortChange(message: string):any{
    this.messageSource.next(message)
  }
cartCount:any;

}
