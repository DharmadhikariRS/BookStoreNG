import { Component, Input } from '@angular/core';
import { BookService } from '../signin/service/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['../cart/cart.component.scss']
})
export class OrderSummaryComponent {
@Input() data:any
constructor(private bookService:BookService,private _snackBar:MatSnackBar,private router:Router){}
purchaseCart(){
  this.bookService.purchaseCart(this.data._id).subscribe({
    next:  (res:any)=>{
      console.log("response inside ngoninit cart",res);
    this._snackBar.open(res.message,'',{
      duration:2000,
      verticalPosition:'bottom'
    });
    // alert(res.message);
    this.router.navigateByUrl('orderplaced')
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
