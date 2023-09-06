import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;
  loginForm !: FormGroup;
  submittedlogin = false;
  toggle:boolean=true;
  loggedIn:any;
user:any;

  constructor(private formBuilder: FormBuilder,private userService:UserService,
    private _snackBar: MatSnackBar,
    private router:Router,private authService: SocialAuthService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        
          fullName: ['', [Validators.required,Validators.pattern("^[A-Z]{1}[a-z A-Z]{2,}$")]],
         
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.pattern( "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
          mobileNumber: ['',[ Validators.required,Validators.pattern("[6-9]{1}[0-9]{9}$")]]
      });
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern( "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")]],
        
    });

    this.authService.authState.subscribe({ next:  (user) => {
      this.user = user;
       this.loggedIn = localStorage.getItem('bookStoreToken')
    console.log("user info=",user);
 
      this.googleLogin();
    
     
    },
    error:(e)=>{ console.log("error is",e)},
    complete: () => console.log('done')
    
    }
    );  
  }
  get f() { return this.registerForm.controls; }
  get fn() { return this.loginForm.controls; }
logIn(){
this.toggle=true;


}

signUp(){
  this.toggle=false;
}
googleLogin(){
  this.userService.googleLogin(this.user).subscribe({
    next: async (res:any)=>{console.log("response",res);
   await localStorage.setItem('bookStoreToken',res.data)
   
    this._snackBar.open(res.message,'',{
      duration:2000,
      verticalPosition:'bottom'
    });
  this.router.navigateByUrl('/dashboard/getallbooks')
  //  alert(res.message);
  //  this.router.navigateByUrl("/dashboard/getnotes")
      },
      error:(e:any)=>{ 
        this._snackBar.open(e.message,'',{
          duration:2000,
          verticalPosition:'bottom'
        });
        // alert("Wrong email id or password");
      },
      complete: () => console.log('done'),
  
    })

}
openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action);
}
  onSubmit() {
      this.submitted = true;
      let data={fullName:this.registerForm.value.fullName,
     email:this.registerForm.value.email,
  password:this.registerForm.value.password,
  mobileNumber:this.registerForm.value.mobileNumber}

console.log("dataaaaaa",this.registerForm.value);

      if (this.registerForm.invalid) {
        return;
    }else{
    
      this.userService.register(data).subscribe({
    next:  (res:any)=>{console.log("response",res);
    this._snackBar.open(res.message,'',{
      duration:2000,
      verticalPosition:'bottom'
    });
    //  alert(res.message);
   this.logIn()
      },
      error:(e: { message: any; })=>{ 
        this._snackBar.open(e.message,'',{
          duration:2000,
          verticalPosition:'bottom'
        });
        // alert(e.message);
      },
      complete: () => console.log('done'),

    })}
  }
  loginSubmit() {
    this.submittedlogin = true;
    console.log("dataaaaaa in login",this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
  }else{
  
    this.userService.login(this.loginForm.value).subscribe({
  next: async (res:any)=>{console.log("response",res);
 await localStorage.setItem('bookStoreToken',res.data)
 
  this._snackBar.open(res.message,'',{
    duration:2000,
    verticalPosition:'bottom'
  });
this.router.navigateByUrl('/dashboard/getallbooks')
//  alert(res.message);
//  this.router.navigateByUrl("/dashboard/getnotes")
    },
    error:(e:any)=>{ 
      this._snackBar.open(e.message,'',{
        duration:2000,
        verticalPosition:'bottom'
      });
      // alert("Wrong email id or password");
    },
    complete: () => console.log('done'),

  })
   
  }
    // stop here if form is invalid
// if (this.loginForm.invalid) {
//       return;
//   }else{
  
//     this.userService.login(this.loginForm.value).subscribe({
//   next: async (res:any)=>{console.log("response",res);
//  await localStorage.setItem('fondooToken',res.data)
//  alert(res.message);
//  this.router.navigateByUrl("/dashboard/getnotes")
//     },
//     error:(e:any)=>{ alert("Wrong email id or password");},
//     complete: () => console.log('done'),

//   })
   
//   }
}
}
function openSnackBar(message: any, string: any, action: any, string1: any) {
  throw new Error('Function not implemented.');
}

