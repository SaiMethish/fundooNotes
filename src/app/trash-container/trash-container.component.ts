import { Component, OnInit } from '@angular/core';
import { NotesService } from '../service/notes/notes.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit {

  constructor(private notesService:NotesService) { }
  trashList:any;
  ngOnInit(): void {
    this.notesService.getAllNotes('getNotesList').subscribe({
      next:(res:any)=>{
        console.log(res.data.data);
        this.trashList=res.data.data.filter((i:any)=>{
          return i.isDeleted==true;
        });
      },
      error:err=>console.log(err),
      complete:()=>{}
    })
  }

}
