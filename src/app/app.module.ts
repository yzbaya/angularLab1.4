import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { appComponent } from './app.component';
import{ListNotesComponent}from './liste-notes/liste-notes.component';
@NgModule({
  declarations: [
    appComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//providers
    FormsModule
  ],
  providers: [],
  bootstrap: [appComponent]
})
export class AppModule {}
