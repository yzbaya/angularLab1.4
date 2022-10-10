import { Component } from '@angular/core';

@Component({
selector: 'app-root',
template: `

  <p>Foreground:<input [(ngModel)]="fg"></p>
  <p>Background:<input [(ngModel)]="bg"></p>
  <di [ngStyle]="{'color':fg, 'background-color':bg,'padding':'5px'}">Zone de teste</di>]
`,
styles: []
})


export class AppComponent{
 fg= "#ff0f1f";
 bg="#faa350";
}
//windowa.location.href:pour afficher l'image pour la lab1.2