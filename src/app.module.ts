// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { FilmsModule } from './Film/film.module';
import { AutocompleteController } from './Film/autocomplete.controller';
import { AutocompleteService } from './Film/autocomplete.service';


@Module({
  imports: [
    FilmsModule,
    MongooseModule.forRoot('mongodb://localhost/your-database-name'),
    ElasticsearchModule.register({
      node: 'http://localhost:9200', // Elasticsearch node URL
    }),
  ],
  controllers: [AutocompleteController],
  providers: [AutocompleteService],
})
export class AppModule {}
