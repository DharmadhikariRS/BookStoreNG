import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
constructor( ){}    
  transform(books: any,filterValue:string ) {
    console.log("array inside filter",books)
    if(filterValue==''){
      console.log("array inside if of filter",books)
      return books;
    }else{
      console.log("array inside if of filter",books)
    books = books.filter((book:any)=> book.bookName.toLowerCase().includes(filterValue))
    console.log("array inside else filter",books)
    return books;
    }
  }

}
