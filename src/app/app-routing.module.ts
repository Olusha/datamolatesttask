import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { FilmListResolver } from './pages/film-list/film-list.resolver';


const routes: Routes = [
  {
    component: AppComponent,
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'film-list',
        pathMatch: 'full',
      },
      {
        path: 'film-list',
        component: FilmListComponent,
        resolve: {
          filmList: FilmListResolver,
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
