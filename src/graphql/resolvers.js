const fetch = require("node-fetch");
const { getUSer, getUsers } = require('./user.resolvers');

const resolvers = {
  Query: {
    searchCharacters: async (_, { name, status, species, gender, origin }) => {
      const query = `
        query ($name: String, $status: String, $species: String, $gender: String) {
          characters(filter: {
            name: $name,
            status: $status,
            species: $species,
            gender: $gender
          }) {
            results {
              id
              name
              status
              species
              gender
              origin {
                name
              }
              image
            }
          }
        }
      `;

      const variables = { name, status, species, gender };

      const response = await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
      });

      const data = await response.json();

      let results = data.data?.characters?.results || [];

      if (origin) {
        results = results.filter(
          (c) =>
            c.origin &&
            c.origin.name &&
            c.origin.name.toLowerCase().includes(origin.toLowerCase())
        );
      }

      return results;
    },
    user: getUSer,
    users: getUsers
  },
};

module.exports = resolvers;