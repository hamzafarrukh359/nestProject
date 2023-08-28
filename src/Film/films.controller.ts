import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Assuming you have implemented JWT authentication
import { FilmDocument } from './film.schema';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createFilmDto: CreateFilmDto): Promise<FilmDocument> {
    return this.filmsService.create(createFilmDto);
  }

  @Get()
  findAll(): Promise<FilmDocument[]> {
    return this.filmsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<FilmDocument | null> {
    return this.filmsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: CreateFilmDto): Promise<FilmDocument | null> {
    return this.filmsService.update(id, updateFilmDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string): Promise<FilmDocument | null> {
    return this.filmsService.delete(id);
  }
}