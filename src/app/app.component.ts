import { Component, OnInit } from '@angular/core';
import { Note } from './Note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  template: `
    <input #n input type="text" [disabled]="actif" />
    <br />
    <button type="button" (click)="enableDisable()">enable disable</button>
    <button type="button" (click)="addNote(n.value)">add note</button><br />
    <button type="button" (click)="showNotes()">Show note</button><br />

    <ul>
      <li [ngStyle]="{color:n.couleur}" *ngFor="let n of notes">{{ n.valeur }}</li>
    </ul>
  `,

  ///templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesService],
})
export class appComponent {
  actif = false;
  notes: Note[] = [];
  constructor(private notesService: NotesService) {}

  //  ngOnInit(){
  //   this.notes=this.notes.getNotes();
  //  }

  addNote(n: string) {

    this.notesService.addNote({valeur:n,couleur:'#FF9545'});
  }

  showNotes() {
    this.notes = this.notesService.getNotes();
  }

  enableDisable() {}
}

//n