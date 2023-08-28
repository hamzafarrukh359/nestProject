// src/films/schemas/film.schema.ts
import * as mongoose from 'mongoose';

export const FilmSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  releaseDate: Date,
  ticketPrice: Number,
  country: String,
  genre: String,
  // ... other fields
});

export interface FilmDocument extends mongoose.Document {
  name: string;
  description: string;
  releaseDate: Date;
  ticketPrice: number;
  country: string;
  genre: string;
  // ... other fields
}

export const FilmModel = mongoose.model<FilmDocument>('Film', FilmSchema);
