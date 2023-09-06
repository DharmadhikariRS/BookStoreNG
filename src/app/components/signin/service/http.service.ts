import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl:string ="http://localhost:3000/api/v1/"
  constructor(private httpclient:HttpClient) { }

  post(url:string,reqdata:any,token:boolean,httpOption:any){
  return this.httpclient.post(this.baseurl+url,reqdata , token && httpOption)
  }
  get(url:string,token:boolean,httpOption:any){
    return this.httpclient.get(this.baseurl+url, token && httpOption)
    }
}
