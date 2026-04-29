import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Film } from '../../types/types';

@Component({
  selector: 'app-film-card',
  imports: [RouterLink],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss',
})
export class FilmCardComponent {
  film = input.required<Film>();

  favoriteToggle = output<number>();

  onToggleFavorite(event: MouseEvent): void {
    event.stopPropagation();
    this.favoriteToggle.emit(this.film().id);
  }
}
