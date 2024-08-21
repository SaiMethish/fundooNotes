import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../service/user/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-email',
  templateUrl: './create-email.component.html',
  styleUrls: ['./create-email.component.scss']
})
export class CreateEmailComponent implements OnInit {

  constructor(private fb:FormBuilder, private userService:UserService, private router:Router) { }
  userform!:FormGroup;
  ngOnInit(): void {
    this.userform=this.fb.group({
      email:[""],
      password:[""],
      confirmpassword:[""]
    });
  }

  submitForm=()=>{
    let names:any=localStorage.getItem("userdetails");
    names=JSON.parse(names);
    const userdata={
      firstName:names.firstname,
      lastName:names.lastname,
      email:this.userform.get('email')?.value,
      service:"advance",
      password:this.userform.get('confirmpassword')?.value
    }
    console.log(userdata);
    this.userService.register('/userSignUp',userdata).subscribe({
      next:(res)=>{
        console.log(res);
        localStorage.removeItem("userdetails");
        this.router.navigate(['/login'])
      },
      error:(err)=>console.log(err),
      complete:()=>{}
    })
  }
}
