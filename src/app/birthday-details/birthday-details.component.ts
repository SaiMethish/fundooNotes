import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-details',
  templateUrl: './birthday-details.component.html',
  styleUrls: ['./birthday-details.component.scss']
})
export class BirthdayDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  months=["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

}
