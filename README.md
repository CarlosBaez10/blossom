# Blossom - GraphQL API

Este proyecto es una API construida con **Node.js**, **Express**, **Apollo Server** y **GraphQL**.  
Integra una base de datos mediante **Sequelize** y, además, consume datos externos de la API de **Rick and Morty**.  

---
## Tecnologías utilizadas

- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/)  
- [GraphQL](https://graphql.org/)  
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)  
- [Sequelize](https://sequelize.org/)  
- [PostgreSQL](https://www.postgresql.org/)  
- [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql)  

---

## Instalación y ejecución

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/CarlosBaez10/blossom.git
   cd blossom
---

2.  **Ejecutar docker compose**
```sh
docker-compose up --build -d --remove-orphans
```
---

3. **Install**

```sh
npm install
```
---

4. **Migrations**

```sh
npm run migrations:run
```
---

5. **Run in dev mode**

```sh
npm run dev
```
---

## Ejecutar Querys GraphQL

1. **En el navegador**
```sh
http://localhost:3000/graphql
```
---

2. **Obtener personajes (Rick and Morty)**
```sh
query {
  searchCharacters(name: "Rick", status: "Alive") {
    id
    name
    status
    species
    origin {
      name
    }
  }
}
```
---

3. **Obtener usuarios desde la base de datos**
```sh
query {
  users {
    id
    name
  }
}

```
---

4. **Obtener un usuario por ID desde la base de datos**
```sh
query {
  user(id: 1) {
    id
    name
  }
}
```

## Middleware de logging

Cada request pasa por un middleware que imprime información relevante en la consola:

Método HTTP

URL

Timestamp

Tiempo de respuesta