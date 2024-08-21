import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl="user/";
  constructor(private httpService:HttpService) { }
  access_token=localStorage.getItem("access_token");
  login(url:any,body:any){
    return this.httpService.PostService(this.baseurl+url,body,false,null);
  }

  register=(url:any,body:any)=>{
    return this.httpService.PostService(this.baseurl+url,body,false,null);
  }

  getUserById=(url:any)=>{
    return this.httpService.GetService(`${this.baseurl}${url}?access_token=${this.access_token}`);
  }

  logout=()=>{
    localStorage.clear();
  }
}
