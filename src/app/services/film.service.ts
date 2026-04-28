import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';

import { Film } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private http = inject(HttpClient);

  private _films = signal<Film[]>([]);
  films = this._films.asReadonly();

  loadFilms(): void {
    this.http.get<Film[]>('assets/films.json').subscribe((data) => {
      this._films.set(data);
    });
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
