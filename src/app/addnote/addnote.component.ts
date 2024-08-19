import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  submitNote=($event:any)=>{
    const e=$event;
  }
}
