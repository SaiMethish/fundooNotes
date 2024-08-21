import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {
  archiveList:any;
  searchMessage:string='';
  constructor(private notesService:NotesService, private data:DataService) { }

  ngOnInit(): void {
    this.notesService.getAllNotes('getNotesList').subscribe({
      next:(res:any)=>{
        console.log(res.data.data);
        this.archiveList=res.data.data.filter((i:any)=>{
          return i.isArchived==true;
        });
      },
      error:err=>console.log(err),
      complete:()=>{}
  });
  this.data.currentMessage.subscribe((message)=>{
    this.searchMessage=message;
  })
}

}
