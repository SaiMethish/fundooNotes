import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { NotesService } from '../service/notes/notes.service';
@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  constructor(private fb:FormBuilder, private notesService:NotesService) { }
  notesform!:FormGroup;
  isExpanded:Boolean=false;
  ngOnInit(): void {
    this.notesform=this.fb.group({
      title:[''],
      note:[''],
      isPinned:[false],
      isReminded:[false],
      isArchived:[false]
    });

  }
  submitNote=()=>{
    this.isExpanded=false;
    let formData={
      title:this.notesform.get('title')?.value,
      description:this.notesform.get('note')?.value,
      isPined:this.notesform.get('isPinned')?.value,
      isArchived:this.notesform.get('isArchived')?.value
    }
    console.log(formData);
    this.notesService.addNotes('addNotes',formData).subscribe({
      next:(res)=>console.log(res),
      error:(err)=>console.log(err),
      complete:()=>{}
    })

  }
  expand=()=>{
    this.isExpanded=true;
  }
  clickPinned=()=>{
    this.notesform.get('isPinned')?.setValue(true);
  }

  clickArchived=()=>{
    this.notesform.get('isArchived')?.setValue(true);
  }

  clickReminded=()=>{
    this.notesform.get("isReminded")?.setValue(true);
  }

}
