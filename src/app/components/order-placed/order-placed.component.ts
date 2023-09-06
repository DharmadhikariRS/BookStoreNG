import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent {
constructor(private router:Router){}

goToDashBoard(){
  this.router.navigateByUrl('/dashboard/getallbooks')
}
}
