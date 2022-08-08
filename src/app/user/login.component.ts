import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
  templateUrl:'./login.component.html'
})
export class LoginComponent{
  userName:any;
  password:any;

  constructor(private authService:AuthService,private router:Router){}
  login(formValues:any){
    console.log(formValues)
    this.authService.loignUser(formValues.userName,formValues.password)

    this.router.navigate(['events']);
  }

  cancel(){
    this.router.navigate(['events']);
  }

}
