import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word-processing/word/word.component';
import { SentenceComponent } from './word-processing/sentence/sentence.component';
import { CtrlClickDirective } from './directives/ctrl-click.directive';
import { ShiftClickDirective } from './directives/shift-click.directive';
import { MetaClickDirective } from './directives/meta-click.directive';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from './reducers';
import { rootEffects } from './effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    SentenceComponent,
    CtrlClickDirective,
    ShiftClickDirective,
    MetaClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot(rootEffects),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
