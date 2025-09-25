const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Origin {
    name: String
  }

  type Character {
    id: ID
    name: String
    status: String
    species: String
    gender: String
    origin: Origin
  }

    type Query {
    searchCharacters(
      name: String
      status: String
      species: String
      gender: String
      origin: String
    ): [Character]
    user(id: ID): User
    users: [User]
  }

  type User {
    id: ID
    name: String
    status: String
    species: String
    gender: String
    origin: Origin
  }
`;

module.exports = typeDefs;