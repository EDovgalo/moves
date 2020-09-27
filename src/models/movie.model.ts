// eslint-disable-next-line no-shadow
export enum Genres {
  Action = 'Action',
  Drama = 'Drama',
  OscarWinning = 'Oscar winning',
  Adventure = 'Adventure',
  Music = 'Music',
  Default = ''
}

export class Movie {
  constructor(
    public id: number,
    public title: string = '',
    public genres: Array<Genres>,
    public release_date: string = '',
    public poster_path: string,
    public overview: string,
    public vote_average: number = 2,
    public runtime: number,
    public description?: string,
    public rating?: number,
  ) {
    this.genres = typeof genres === 'string' ? (genres as string).split(', ') as Array<Genres> : genres;
    this.release_date = new Date(release_date).toISOString();
    this.runtime = +runtime;
  }
}
