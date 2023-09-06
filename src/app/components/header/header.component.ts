import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../signin/service/data.service';
import { BookService } from '../signin/service/book.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(private router:Router,private dataService:DataService,private bookService:BookService ){}
  profileToggle:boolean=false
  searchedTitle:any
badge:any;
  ngOnInit(){
this.getCartBooks()
  }
  profiletoggle(){
this.profileToggle=!this.profileToggle
  }

  goToWishlist(){
    this.router.navigateByUrl('/dashboard/wishlist')
    this.profileToggle=!this.profileToggle
  }
  goToCart(){
    this.router.navigateByUrl('/dashboard/cart')
  }
  setSearch(e:any){
    this.dataService.changeMessage(e.target.value)
  }
  logOut(){
    localStorage.removeItem('bookStoreToken');
    this.router.navigateByUrl('signin')
  }


  getCartBooks(){
    this.bookService.getCartBooks().subscribe({
      next:  (res:any)=>{
        this.badge=res.data.books.length;
        console.log("response inside ngoninit header cart",res.data.books.length);
      //  this.books = res.data.books
      //  this.cartData=res.data
      // this._snackBar.open(res.message,'',{
      //   duration:2000,
      //   verticalPosition:'bottom'
      // });
      // alert(res.message);
      },
        error:(e)=>{ 
  console.log("error object",e);
  // this.books = null;
  //         //  alert(e.message);
  //         this._snackBar.open(e.error.message,'',{
  //           duration:2000,
  //           verticalPosition:'bottom'
  //         });
        },
        complete: () => console.log('done'),
  
      })
  }
}
