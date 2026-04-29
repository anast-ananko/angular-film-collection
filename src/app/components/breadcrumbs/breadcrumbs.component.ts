import { Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
  private router = inject(Router);
  private filmService = inject(FilmService);

  private navEnd = toSignal(
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)),
    { initialValue: null },
  );

  breadcrumbs = computed(() => {
    this.navEnd();

    const url = this.router.url;
    const films = this.filmService.films();

    if (url === '/') {
      return [{ label: 'Home', url: '/' }];
    }

    if (url === '/about') {
      return [{ label: 'About', url: '/about' }];
    }

    if (url.startsWith('/film/')) {
      const id = Number(url.split('/')[2]);
      const film = films.find((f) => f.id === id);

      return [
        { label: 'Home', url: '/' },
        { label: film?.title || 'Film', url },
      ];
    }

    return [
      { label: 'Home', url: '/' },
      { label: 'Not Found', url },
    ];
  });
}
