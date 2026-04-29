import { Component, computed, inject, signal } from '@angular/core';

import { FilmService } from '../../services/film.service';
import { AutofocusDirective } from '../../directives/autofocus.directive';
import { FilmCardComponent } from "../../components/film-card/film-card.component";

@Component({
  selector: 'app-home',
  imports: [AutofocusDirective, FilmCardComponent],
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

  onSearch(value: string): void {
    this.search.set(value);
  }

  toggleFavorite(id: number): void {
    this.filmService.toggleFavorite(id);
  }
}
