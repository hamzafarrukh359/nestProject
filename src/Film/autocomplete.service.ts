// src/films/autocomplete.service.ts
import { Injectable } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class AutocompleteService {
  private readonly esClient: Client;

  constructor() {
    // Initialize the Elasticsearch client
    this.esClient = new Client({ node: 'http://localhost:9200' });
  }

  async getAutocompleteSuggestions(query: string) {
    try {
      const { body } = <any> await this.esClient.search({
        index: 'films',
        body: {
          suggest: {
            film_suggest: {
              prefix: query,
              completion: {
                field: 'suggest', // The suggest field you would define in your mapping
                fuzzy: {
                  fuzziness: 'AUTO',
                },
              },
            },
          },
        },
      });

      return body.suggest.film_suggest[0]?.options.map((option: any) => option._source.name);
    } catch (error) {
      console.error('Elasticsearch error:', error);
      return [];
    }
  }
}
