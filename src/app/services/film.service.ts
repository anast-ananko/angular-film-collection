import { computed, Injectable, signal } from '@angular/core';

import { Film } from '../types/types';
import filmsData from '../../assets/films.json';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private _films = signal<Film[]>([]);
  films = this._films.asReadonly();

  loadFilms(): void {
    this._films.set(filmsData);
  }

  toggleFavorite(id: number): void {
    this._films.update((films) =>
      films.map((f) => (f.id === id ? { ...f, isFavorite: !f.isFavorite } : f)),
    );
  }

  favoriteFilms = computed(() => this._films().filter((f) => f.isFavorite));

  getFilmById(id: number): Film | undefined {
    return this._films().find((f) => f.id === id);
  }
}
