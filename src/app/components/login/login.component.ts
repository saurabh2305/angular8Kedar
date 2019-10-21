import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup
  constructor(private fb:FormBuilder,private userSvc:UserService,private router:Router) {
    this.loginForm = this.fb.group({
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(7)]))
      
    })
   }

  ngOnInit() {
  }
  public get Username(){
    return this.loginForm.controls["username"];
  }
  public get Password(){
    return this.loginForm.controls["password"];
  }
  login(){
    if(this.loginForm.valid){
       let username = this.loginForm.value.username;
       let password = this.loginForm.value.password;
       this.userSvc.getUser(username,password)
       .subscribe(
         result=>{
           if(result.length>0){
             this.userSvc.saveUserState(result[0]); // after login save user state
             this.router.navigate(['/']);
           }
           else{
             alert("User not exists");
           }
         },
         err=>{
           alert("Error in validation")
         }
       )
    }else{
          alert("Invalid username/ password")
    }
  }

}
