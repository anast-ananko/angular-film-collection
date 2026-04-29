import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { FilmService } from '../../services/film.service';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
})
export class FilmDetailsComponent {
  private route = inject(ActivatedRoute);
  private filmService = inject(FilmService);

  film = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.filmService.getFilmById(id);
  });
}
