# Film Management System

A RESTful API application for managing films, with features including user authentication, film rating, commenting, searching, and more. Built using NestJS and integrated with Elasticsearch for advanced search capabilities.

## Features

- Create, update, and delete films via RESTful API.
- User registration and authentication for secure access.
- Rate and comment on films (authenticated users only).
- Sync film data with Elasticsearch for improved search.
- Autocomplete search functionality based on film names and descriptions.
- Rank or score films by boosting specific genres or directors.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- An active MongoDB instance.
- An active Elasticsearch instance.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/film-management-system.git
   cd film-management-system
   
   
   npm install

Configure environment variables:

Create a .env file in the root directory and provide the necessary configuration values for MongoDB and Elasticsearch.

MONGODB_URI=your-mongodb-uri
ELASTICSEARCH_NODE=your-elasticsearch-node

Usage
Start the application:

bash
Copy code
npm run start:dev

