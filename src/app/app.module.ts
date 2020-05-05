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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuraComponent } from './quran-components/sura/sura.component';
import { VerseComponent } from './quran-components/verse/verse.component';
import { VerseWordComponent } from './quran-components/verse-word/verse-word.component';
import { storageSync } from './meta-reducers/storage-sync';
import { UsersNavComponent } from './users-components/users-nav/users-nav.component';
import { BrowseUsersComponent } from './users-components/browse-users/browse-users.component';
import { QuranReaderComponent } from './quran-components/quran-reader/quran-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    SentenceComponent,
    CtrlClickDirective,
    ShiftClickDirective,
    MetaClickDirective,
    SuraComponent,
    VerseComponent,
    VerseWordComponent,
    UsersNavComponent,
    BrowseUsersComponent,
    QuranReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot(rootReducer, {
      metaReducers: [storageSync],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),

    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot(rootEffects),
    BrowserAnimationsModule,

    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
