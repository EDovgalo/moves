export class Movie {
  constructor(
    public id: number,
    public genres: any,
    public poster_path: string,
    public overview: string,
    public runtime: number,
    public description?: string,
    public rating?: number,
    public title: string = '',
    public release_date: string = '',
    public vote_average: number = 2,
  ) {}
}
