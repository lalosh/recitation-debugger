import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseUsersComponent } from './users-components/browse-users/browse-users.component';
import { QuranReaderComponent } from './quran-components/quran-reader/quran-reader.component';


const routes: Routes = [
  {
    path: 'users/:userId',
    component: BrowseUsersComponent
  },
  {
    path: '',
    component: QuranReaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
