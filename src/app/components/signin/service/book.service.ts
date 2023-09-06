import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
token:any;
header:any
  constructor(private httpservice:HttpService) { 
  
  this.token =localStorage.getItem('bookStoreToken')
     this.header = {
      headers:new HttpHeaders({
          'Content-type':'application/json',
           'Authorization':"Bearer"+" "+this.token
        })
      }
}
public getBooks(){
  console.log("token value",this.token)
  return this.httpservice.get('books',true,this.header);
 }
 public addToCart(id:any){
  console.log("token value",this.token)

  return this.httpservice.post(`cart/${id}`,{},true,this.header);
 }
 public removeFromCart(id:any){
  console.log("token value",this.token)

  return this.httpservice.post(`cart/${id}/removeFromCart`,{},true,this.header);
 }
 public getCartBooks(){
  console.log("token value",this.token)

  return this.httpservice.get('cart',true,this.header);
 }

 public addToWishlist(id:any){
  console.log("token value",this.token)

  return this.httpservice.post(`wishlist/${id}`,{},true,this.header);
 }
 public getWishlist(){
  console.log("token value",this.token)
  return this.httpservice.get('wishlist',true,this.header);
 }
 public removeFromWishlist(id:any){
  console.log("token value",this.token)

  return this.httpservice.post(`wishlist/${id}/removeFromWishlist`,{},true,this.header);
 }

 public addCustomerDetails(reData:any){
  console.log("token value",this.token)

  return this.httpservice.post(`customerdetails`,reData,true,this.header);
 }

 public purchaseCart(id:any){
  console.log("token value",this.token)

  return this.httpservice.post(`cart/${id}/purchase`,{},true,this.header);
 }
}



