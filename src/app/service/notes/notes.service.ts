import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpService:HttpService) { }
  baseurl='notes/';
  access_token=localStorage.getItem("user-id");

  getAllNotes=(url:any)=>{
    return this.httpService.GetService(`${this.baseurl}/${url}?access_token=${this.access_token}`);
  }

  addNotes=(url:any,data:any)=>{
    return this.httpService.PostService(`${this.baseurl}/${url}?access_token=${this.access_token}`,data,false,null);
  }
}
