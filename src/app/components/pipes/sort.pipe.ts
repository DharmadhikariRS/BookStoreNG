import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(bookss: any,sortType:string ) {
    console.log("array inside sort filter",bookss)
   if(sortType=="Low to High"){
let arr= bookss.toSorted((a:any, b:any) => {
  return a.discountPrice - b.discountPrice;
 
});

console.log("ascending array",arr);
return arr;
}else if(sortType=="High to Low"){
  let arr=bookss.toSorted((a:any, b:any) => {
    return b.discountPrice - a.discountPrice;
   
  });
  console.log("descending array",arr);
  return arr;
}else{
console.log("array in none",bookss);

  
return bookss;
}
  }

}
