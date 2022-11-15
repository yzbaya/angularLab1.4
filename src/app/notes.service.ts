import { Injectable } from '@angular/core';
import { Note } from './Note';

@Injectable({
  providedIn: 'root'
})

export class NotesService {

  constructor() {}
  notes:Note[]=[];


  addNote(note: Note){
    this.notes.push(note);
  }


  getNotes(){
    return JSON.parse(JSON.stringify(this.notes));
    }

}
