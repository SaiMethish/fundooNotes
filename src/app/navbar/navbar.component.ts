import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user-service.service';
import { Router } from '@angular/router';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchMessage:string='';
  constructor(private userService:UserService, private router:Router,private data:DataService) { 

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
  Search=(newValue:string)=>{
    this.data.changeMessage(this.searchMessage);
  }

  Logout=()=>{
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
