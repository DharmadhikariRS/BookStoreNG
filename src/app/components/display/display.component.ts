import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../signin/service/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
@Input() books:any;
@Input() fixedBook:any;
filterValue:any;
sortedBooks:any;

Subscription:Subscription | undefined;
p=1;
 temp: any;
 temp1:any;
 sortBy:string='';
constructor(private router:Router,private dataService:DataService){
}
goTobookDetail(book:any){
  console.log("inside onclick by display");
  
  // this.router.navigate(['/dashboard/bookdetail',{book:JSON.stringify(book)}])

  this.router.navigate(['/dashboard/bookdetail'],{state:book})
}
sortBooks(event:any){
// console.log("sort option",event.target.value);
// if(event.target.value=="Low to High"){
//  let arr=this.books.sort((a:any, b:any) => {
//   return a.discountPrice - b.discountPrice;
 
// });
// console.log("ascending array",arr);
// }else if(event.target.value=="High to Low"){
//   let arr=this.books.sort((a:any, b:any) => {
//     return b.discountPrice - a.discountPrice;
   
//   });
//   console.log("descending array",arr);
// }else{
//   console.log("inside none books",this.books);
//   console.log("inside none fixed",this.fixedBook);
  
//   this.books=this.fixedBook;
// }
this.sortBy=event.target.value
}
ngOnInit(){
  console.log("notes array in display",this.books);
  this.Subscription = this.dataService.currentMessage.subscribe(message => this.filterValue = message)
  this.temp1=this.temp;
  console.log("temp1 data=",this.temp1);
 }
 ngOnChanges(changes: SimpleChanges) {
  const mainDataChange = changes['books'] ;

  if (mainDataChange) {
    this.temp = this.books; 
    // or, this.myDataCopy = mainDataChange.currentValue;
    console.log('My copy Data', this.temp);
  }
}

}
