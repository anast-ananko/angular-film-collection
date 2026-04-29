import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FilmService } from '../../services/film.service';
import { AutofocusDirective } from '../../directives/autofocus.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, AutofocusDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private filmService = inject(FilmService);

  search = signal('');

  filteredFilms = computed(() => {
    const query = this.search().toLowerCase();

    return this.filmService.films().filter((f) => f.title.toLowerCase().includes(query));
  });

  onSearch(value: string) {
    this.search.set(value);
  }

  toggleFavorite(id: number) {
    this.filmService.toggleFavorite(id);
  }
}
