import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { 

  }
  username:String="";
  ngOnInit(): void {
    let user_id=localStorage.getItem("user_id");
    this.userService.getUserById(`${user_id}`).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.username=res.username.split('@')[0];
      }
    })
  }
  Search=($event:any)=>{
    console.log($event)
  }

  Logout=()=>{
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
