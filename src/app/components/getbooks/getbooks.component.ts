import { Component, OnInit } from '@angular/core';
import { BookService } from '../signin/service/book.service';
@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit{
  books:any;
  constructor(private bookService:BookService){}
  ngOnInit() {
      this.getNotesFn();
  }
  getNotesFn(){
 this.bookService.getBooks().subscribe({
      next:  (res:any)=>{
        console.log("response",res.data);
     this.books=res.data
      },
        error:(e)=>{ alert(e.message);},
        complete: () => console.log('done'),
  
      })
  
  }

}
