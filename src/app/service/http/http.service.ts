import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  baseurl="https://fundoonotes.incubation.bridgelabz.com/api/";

  PostService(url:any,data:any,token:Boolean,headersOption:any){
    return this.http.post(this.baseurl+url,data,token&&headersOption);
  }

  GetService(url:any){
    return this.http.get(this.baseurl+url);
  }

  PutService(url:any,data:any,token:Boolean,headersOption:any){
    return this.http.put(this.baseurl+url,data,headersOption);
  }
}
