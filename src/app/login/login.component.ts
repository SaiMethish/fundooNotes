import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;
  isSubmitted:Boolean=false;
  isemailset:Boolean=false;
  authError:string="";
  constructor(private fb:FormBuilder, private router:Router, private userservice:UserService) { }

  ngOnInit(): void {
    this.loginform=this.fb.group({
      email:['',[Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  passwordPage:Boolean=false;
  pageswitcher=()=>{
    this.isemailset=true;
    console.log(this.isemailset)
    if(this.loginform.get('email')?.valid){
      this.passwordPage=!this.passwordPage;
    }
  }
  loginSubmit=()=>{
    this.isSubmitted=true;
    if(this.loginform.valid){
      const logindata={
        email:this.loginform.get("email")?.value,
        password:this.loginform.get("password")?.value
      }
      this.userservice.login('login',logindata).subscribe({
        next:(res:any)=>{
          console.log(res)
          res?localStorage.setItem("user-id",res.id):console.log("object is null");
          this.router.navigate(['/'])
        },
        error:(err)=>{
          if(err.statusText==="Unauthorized"){
            this.authError=err.statusText;
          }
          setTimeout(() => {
            this.passwordPage=false;
          },3000);
        },
        complete:()=>{}
      })
    }
  }

}
