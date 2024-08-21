import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private fb:FormBuilder) { }
  userform!:FormGroup;
  ngOnInit(): void {
    this.userform=this.fb.group({
      firstname:[""],
      lastname:[""]
    })
  }

  submitform=()=>{
    const userdetails={
      firstname:this.userform.get("firstname")?.value,
      lastname:this.userform.get("lastname")?.value
    };
    console.log(userdetails);
    localStorage.setItem("userdetails",JSON.stringify(userdetails));
    this.router.navigate(['/birthdayDetails']);
    
  }
}
