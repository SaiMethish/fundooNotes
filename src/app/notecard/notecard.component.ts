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
    let data={
      noteIdList:[this.note.id],
      isArchived:false,
      isDeleted:false,
      isColor:""
    }
    let url='';
    if(value=='archive'){
      url='archiveNotes';
      data.isArchived=true;
    }
    if(value=='trash'){
      url='trashNotes';
      data.isDeleted=true;
      console.log(this.note);
    }
    this.notesService.addNotes(url,data).subscribe({
      next:res=>console.log(res),
      error:err=>console.log(err),
      complete:()=>{}
    })
  } 
}
