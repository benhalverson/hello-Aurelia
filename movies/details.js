import {inject} from 'aurelia-framework';
import {MovieData} from './MovieData';

@inject(MovieData)

export class Details {
  constructor(MovieData) {
      this.data = MovieData;
  }
  activate(params) {
    return this.data.getById(params.id)
      .then(movie => this.movie = movie);
  }
}
