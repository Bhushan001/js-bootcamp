import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Movie extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  movieId?: number;

  @property({
    type: 'string',
  })
  movieName?: string;

  @property({
    type: 'number',
  })
  rating?: number;

  @property({
    type: 'string',
  })
  movieDesc?: string;

  @property({
    type: 'string',
  })
  director?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Movie>) {
    super(data);
  }
}

export interface MovieRelations {
  // describe navigational properties here
}

export type MovieWithRelations = Movie & MovieRelations;
