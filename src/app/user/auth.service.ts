import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{

  currentUser: IUser | undefined

  loignUser(userName:string,password:string){
    this.currentUser = {
      id:1,
      lastName:'Ghimire',
      firstName:'Kapil',
      userName : userName,
    }
  }

  isAuthenticate(){
    return !!this.currentUser;
  }

  updateCurretnUser(firstName: string, lastName: string) {
    if(this.currentUser){
      this.currentUser.firstName=firstName;
      this.currentUser.lastName=lastName;
    }

  }
}
