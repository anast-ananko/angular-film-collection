import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BreadcrumbsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App implements OnInit {
  private filmService = inject(FilmService);

  ngOnInit() {
    this.filmService.loadFilms();
  }
}
