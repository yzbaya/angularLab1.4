import{Component}from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
    selector:'app-liste-notes',
    templateUrl:'./liste-notes.component.html',
    styleUrls:['./liste-notes.component.css'],
    providers:[NotesService]
})

export class ListNotesComponent{
    private notes=null;
    constructor(private notesService:NotesService){}
    showNotes(){
    //   this.notesService.showNotes(this.notes); 
    }

    addNotes(){
        // this.notesService.addNotes(this.notes);
    }
}