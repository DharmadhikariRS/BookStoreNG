import { Component, OnInit } from '@angular/core';
import { BookService } from '../signin/service/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  constructor(private bookService:BookService,private _snackBar:MatSnackBar,private router:Router){}
  books:any;
ngOnInit() {
  this.getWishlist()
}
goToHome(){
  console.log("inside wish");
  
this.router.navigateByUrl('/dashboard/getallbooks')
}

getWishlist(){
  this.bookService.getWishlist().subscribe({
    next:  (res:any)=>{
      console.log("response inside ngoninit wishlist",res);
     this.books = res.data.books
    this._snackBar.open(res.message,'',{
      duration:2000,
      verticalPosition:'bottom'
    });
    // alert(res.message);
    },
      error:(e)=>{ 
console.log("error object",e);
this.books = null;
        //  alert(e.message);
        this._snackBar.open(e.error.message,'',{
          duration:2000,
          verticalPosition:'bottom'
        });
      },
      complete: () => console.log('done'),

    })
}
removeFromWishlist(id :any){
  this.bookService.removeFromWishlist(id).subscribe({
    next:  (res:any)=>{
      console.log("response inside ngoninit wishlist",res);
      this.getWishlist()
    // this._snackBar.open(res.message,'',{
    //   duration:2000,
    //   verticalPosition:'bottom'
    // });
    // alert(res.message);
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
