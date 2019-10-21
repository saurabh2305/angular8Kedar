import { Injectable, Output } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { User } from '../models';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
   readonly API_URL="http://localhost:3000/users";
   userSubject:BehaviorSubject<any>;
   currentUser:Observable<any>;
  constructor(private http:HttpClient) { 
    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem("user")));
    this.currentUser = this.userSubject.asObservable(); // in this local storage user is monitored once subscribed
  }

  addUser(user:User):Observable<User>{
    /*let options={              // options is repalced by intercepter
      headers:{
        "content-Type":"application/json",
        "Accept":"application/json"
      }
    };*/
    return this.http.post<User>(this.API_URL,user);
  }
  getUser(username:string,password:string):Observable<any>{
    /*let options={ // it is removed as intercepters is used for options
      headers:{
        "content-Type":"application/json",
        "Accept":"application/json"
      }
    };*/
    let url= `${this.API_URL}?username=${username}&password=${password}`;
    return this.http.get<any>(url);
  }
  saveUserState(user){
       delete user.password; 
       localStorage.setItem("user",JSON.stringify(user));
       // next method will send notifications through subject if any changes in user local storage
       this.userSubject.next(user); 
  }

  removeUserState(){
    localStorage.clear();
    this.userSubject.next(null);
  }
  public get LoggedUser(): any{
    return this.userSubject.value;
  }
}
