import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services';
import { User } from 'src/app/models';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userForm:FormGroup;
  constructor(private fb:FormBuilder,private userSvc:UserService) {
    this.userForm = this.fb.group({
      username:new FormControl("",Validators.required),
      password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(7)])),
      fullname:new FormControl("",Validators.required),
      email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
      mobile:new FormControl("",Validators.compose([Validators.required,Validators.maxLength(10)]))
    })
   }

  ngOnInit() {
  }
  public get Username(){
    return this.userForm.controls["username"];
  }
  public get Password(){
    return this.userForm.controls["password"];
  }
  public get Fullname(){
    return this.userForm.controls["fullname"];
  }
  public get Email(){
    return this.userForm.controls["email"];
  }
  public get Mobile(){
    return this.userForm.controls["mobile"];
  }
  register(){
    if(this.userForm.valid){
        let user:User =this.userForm.value; 
        this.userSvc.addUser(user)
        .subscribe(
          result=>{
            console.log(result);
            alert("Registered successfully")
          },
          err=>{alert("Invalid data")}
        )
    }
    else{
      alert("Invalid data")
    }
  }

}
