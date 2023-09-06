import { Component, OnInit } from '@angular/core';
import { BookService } from '../signin/service/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({

  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  books:any;
  addressDetails:boolean=false;
  orderSummary:boolean=false;
  cartData:any;

  constructor(private bookService:BookService,private _snackBar:MatSnackBar,private router:Router){}
  ngOnInit() {
    this.getCartBooks()
  }
  goToHome(){
this.router.navigateByUrl('/dashboard/getallbooks')
  }
  customerDetails(){
    this.addressDetails=!this.addressDetails
  }
  orderSummaryView(){
    console.log("inside order summary view fn cart");
    console.log("inside order summary view fn cart before",this.orderSummary);
  this.orderSummary=!this.orderSummary
  console.log("inside order summary view fn cart before after",this.orderSummary);
  }
  getCartBooks(){
    this.bookService.getCartBooks().subscribe({
      next:  (res:any)=>{
        console.log("response inside ngoninit cart",res.data._id);
       this.books = res.data.books
       this.cartData=res.data
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
  addToCart1(book:any){
    this.bookService.addToCart(book._id).subscribe({
      next:  (res:any)=>{console.log("response",res);
      // alert(res.message);
      // this.bookCount+=1
      this._snackBar.open(res.message,'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      this. getCartBooks();
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
  removeFromCart(book:any){
    this.bookService.removeFromCart(book._id).subscribe({
      next:  (res:any)=>{console.log("response",res);
      // alert(res.message);
      // this.bookCount-=1
      this._snackBar.open(res.message,'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      this. getCartBooks();
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
}
