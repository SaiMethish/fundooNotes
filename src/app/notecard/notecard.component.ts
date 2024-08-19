import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit {
  @Input() note:any;
  constructor() { }

  ngOnInit(): void {
  }

}
