import {inject} from 'aurelia-framework';
import {MovieData} from './MovieData';

@inject(MovieData)
export class Details {

    constructor(movieData) {
        this.data = movieData;
    }

    activate(params) {
        return this.data.getById(params.id)
                        .then(movie => this.movie = movie);
    }
}
