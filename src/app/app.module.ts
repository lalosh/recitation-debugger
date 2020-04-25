import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word-processing/word/word.component';
import { SentenceComponent } from './word-processing/sentence/sentence.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    SentenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
