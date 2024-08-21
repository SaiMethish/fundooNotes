import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {

  constructor(private notesService:NotesService, private data:DataService) { }
  noteslist:any;
  searchMessage:string='';
  ngOnInit(): void {
    this.notesService.getAllNotes('getNotesList').subscribe({
      next:(res:any)=>{
        console.log(res.data.data);
        this.noteslist=res.data.data.filter((i:any)=>{
          return i.isArchived!=true&&i.isDeleted!=true;
        });
      },
      error:err=>console.log(err),
      complete:()=>{}
    });
    this.data.currentMessage.subscribe((message)=>{
      console.log(message);
      this.searchMessage=message;
    })
  }

}
