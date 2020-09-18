import { GenreTypes } from './genre.model';

export class Movie {
  constructor(
    public id: number = new Date().valueOf(),
    public title: string = '',
    public genre: Array<GenreTypes> = [GenreTypes.Default],
    public releaseDate: string = '',
    public imgSrc: string = '',
    public duration?: number,
    public description?: string,
    public rating?: number,
  ) {

  }
}
