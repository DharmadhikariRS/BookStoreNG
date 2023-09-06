import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static register(value: any) {
    throw new Error('Method not implemented.');
  }
  static login(value: any) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private httpservice:HttpService) { }
  
  header = {
   headers:new HttpHeaders({
     'Content-type':'application/json',
      'Authorization':'token',
      
   })
 }
 public register(reqdata:any){
  return this.httpservice.post('users',reqdata,false,this.header);
 }
 public login(reqdata:any){
   return this.httpservice.post('users/login',reqdata,false,this.header);
  }

  public googleLogin(reqdata:any){
    return this.httpservice.post('users/googleLogin',reqdata,false,this.header);
   }
}
