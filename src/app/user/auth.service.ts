import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{
  currentUser: IUser | undefined
  loignUser(userName:string,password:string){
    this.currentUser = {
      id:1,
      userName:'Kapil',
      lastName:'Ghimire',
      firstName:'Kapil'
    }
  }

  isAuthenticate(){
    return !!this.currentUser;
  }
}
