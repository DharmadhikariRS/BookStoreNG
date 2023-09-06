import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import {Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from '../signin/service/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DataService } from '../signin/service/data.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book:any;
  buttonToggle:boolean=false;
  wishlistToggle:string="";
  bookCount:number=1;
  constructor(private ActivatedRoute:ActivatedRoute,private Router:Router,private Location:Location,private bookService:BookService,private _snackBar:MatSnackBar,private dataService:DataService){}
  ngOnInit() {
 this.book=history.state
   console.log("book in bookdetail",this.book);


   this.wishListExist()
  }

  addToCart(){
    this.bookService.addToCart(this.book._id).subscribe({
      next:  (res:any)=>{console.log("response",res);
      // alert(res.message);
      this.buttonToggle=!this.buttonToggle;
this.dataService.cartCount+=1
      this._snackBar.open(res.message,'',{
        duration:2000,
        verticalPosition:'bottom'
      });
     
      //  this.GetNotesComponent.getNotesFn()
        },
        error:(e)=>{ alert(e.message);
          this._snackBar.open(e.message,'',{
            duration:2000,
            verticalPosition:'bottom'
          });
        },
        complete: () => console.log('done'),
  
      })
  }
  addToCart1(){
    this.bookService.addToCart(this.book._id).subscribe({
      next:  (res:any)=>{console.log("response",res);
      // alert(res.message);
      this.bookCount+=1
      this._snackBar.open(res.message,'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      //  this.GetNotesComponent.getNotesFn()
        },
        error:(e)=>{ 
          // alert(e.message);
          this._snackBar.open(e.message,'',{
            duration:2000,
            verticalPosition:'bottom'
          });
        },
        complete: () => console.log('done'),
  
      })
  }
  removeFromCart(){
    this.bookService.removeFromCart(this.book._id).subscribe({
      next:  (res:any)=>{console.log("response",res);
      // alert(res.message);
      this.bookCount-=1
      this._snackBar.open(res.message,'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      //  this.GetNotesComponent.getNotesFn()
        },
        error:(e)=>{ 
          // alert(e.message);
          this._snackBar.open(e.message,'',{
            duration:2000,
            verticalPosition:'bottom'
          });
        },
        complete: () => console.log('done'),
  
      })
  }
  addToWishlist(){
    this.bookService.addToWishlist(this.book._id).subscribe({
      next:  (res:any)=>{console.log("response",res);
      // alert(res.message);
      this.wishlistToggle="red"
      this._snackBar.open(res.message,'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      //  this.GetNotesComponent.getNotesFn()
        },
        error:(e)=>{ 
console.log("error object",e);

          //  alert(e.message);
          this._snackBar.open(e.error.message,'',{
            duration:2000,
            verticalPosition:'bottom'
          });
        },
        complete: () => console.log('done'),
  
      })
  }
  wishListExist(){
    this.bookService.getWishlist().subscribe({
      next:  (res:any)=>{
        console.log("response inside ngoninit wishlist",res);
      let arr = res.data.books.filter((bk:any) => this.book._id === bk._id);
      // alert(res.message);
      this.wishlistToggle="red"
      if (arr.length !== 0) {
        console.log("Inside if");
        console.log("if arr=", arr);
        this.wishlistToggle="red"
      } else {
        console.log("Inside else");
        console.log("else arr=", arr);
        this.wishlistToggle=""
      }
      //  this.GetNotesComponent.getNotesFn()
        },
        error:(e)=>{ 
console.log("error object",e);

          //  alert(e.message);
          this._snackBar.open(e.error.message,'',{
            duration:2000,
            verticalPosition:'bottom'
          });
        },
        complete: () => console.log('done'),
  
      })
  }
}
