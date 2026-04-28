import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: FilmDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];
