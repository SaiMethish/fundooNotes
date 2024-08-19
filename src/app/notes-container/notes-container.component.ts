import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  constructor(private notesService:NotesService) { }
  noteslist:any;
  ngOnInit(): void {
    this.notesService.getAllNotes('getNotesList').subscribe({
      next:(res:any)=>{
        console.log(res.data.data);
        this.noteslist=res.data.data;
      },
      error:err=>console.log(err),
      complete:()=>{}
    })
  }

}
