// src/films/films.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilmDocument } from './film.schema';
import { CreateFilmDto } from './dto/create-film.dto';

@Injectable()
export class FilmsService {
  constructor(@InjectModel('Film') private readonly filmModel: Model<FilmDocument>) {}

  async create(createFilmDto: CreateFilmDto): Promise<FilmDocument> {
    const createdFilm = new this.filmModel(createFilmDto);
    return createdFilm.save();
  }

  async findAll(): Promise<FilmDocument[]> {
    return this.filmModel.find().exec();
  }

  async findById(id: string): Promise<FilmDocument | null> {
    return this.filmModel.findById(id).exec();
  }

  async update(id: string, updateFilmDto: CreateFilmDto): Promise<FilmDocument | null> {
    return this.filmModel.findByIdAndUpdate(id, updateFilmDto, { new: true }).exec();
  }

  async delete(id: string): Promise<FilmDocument | null> {
    return this.filmModel.findByIdAndDelete(id).exec();
  }
}
