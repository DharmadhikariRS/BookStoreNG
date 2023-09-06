import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthguardService } from "../signin/service/authguard.service";

@Injectable({
  providedIn:'root'
})
export class authGuard implements CanActivate{
  
  constructor(public AuthguardService:AuthguardService,private router:Router){
    
  }
  canActivate(): any  {
      if(!this.AuthguardService.gettoken()){
        alert("Please login first")
this.router.navigateByUrl("/signin")
      }else{
        return this.AuthguardService.gettoken();
      }
  }
}