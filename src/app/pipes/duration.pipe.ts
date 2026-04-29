import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    if (!value && value !== 0) return '';

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    if (hours && minutes) {
      return `${hours}h ${minutes}min`;
    }

    if (hours) {
      return `${hours}h`;
    }

    return `${minutes}min`;
  }
}
