// src/films/dto/create-film.dto.ts
import { IsNotEmpty, IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateFilmDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsDateString()
  releaseDate: Date;

  @IsNumber()
  ticketPrice: number;

  @IsString()
  country: string;

  @IsString()
  genre: string;

  // ... other fields
}
