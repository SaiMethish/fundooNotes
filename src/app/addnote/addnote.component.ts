import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  isExpanded:Boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
