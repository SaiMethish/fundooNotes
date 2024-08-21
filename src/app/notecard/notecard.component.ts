import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.scss']
})
export class NotecardComponent implements OnInit {
  @Input() note:any;
  constructor(private notesService:NotesService) { }
  ngOnInit(): void {

  }
  updateNotes=(value:string)=>{
    console.log(value);
    this.notesService.addNotes(value,)
  }

}
