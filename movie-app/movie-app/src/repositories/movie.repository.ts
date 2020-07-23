import {DefaultCrudRepository} from '@loopback/repository';
import {Movie, MovieRelations} from '../models';
import {MoviesDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MovieRepository extends DefaultCrudRepository<
  Movie,
  typeof Movie.prototype.movieId,
  MovieRelations
> {
  constructor(
    @inject('datasources.movies') dataSource: MoviesDataSource,
  ) {
    super(Movie, dataSource);
  }
}
