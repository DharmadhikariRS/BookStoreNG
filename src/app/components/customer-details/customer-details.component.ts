import { Component, Input } from '@angular/core';
import { BookService } from '../signin/service/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent {
@Input() orderSummaryView:any
@Input() orderSummary:any
showError:boolean=false;
constructor(private bookService:BookService,private _snackBar:MatSnackBar,private CartComponent:CartComponent){}
userDetails={
  Addresses: [
    {
      FullName: "",
      MobileNumber: "",
      address: "",
      city: "",
      state: "",
      type: "Home",
    },
  ],
}

 addCustomerDetail()  {
  console.log("address details are", this.userDetails.Addresses);

  const details = Object.values(this.userDetails.Addresses[0]).filter(
    (value) => value === ""
  );
  if (details.length === 0) {
    console.log("inside if");
    //  this.orderSummaryView();
    this.CartComponent.orderSummaryView();
     this.showError=false
    //  addCustomerDetails(userDetails);

    this.bookService.addCustomerDetails(this.userDetails).subscribe({
      next:  (res:any)=>{
        console.log("response inside ngoninit wishlist",res);
      
      this._snackBar.open(res.message,'',{
        duration:2000,
        verticalPosition:'bottom'
      });
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
  } else {
    console.log("inside else");
    this.showError=!this.showError
  }
};
} 

