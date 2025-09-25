const { USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkInsert(USER_TABLE, [
      {
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin":  "Earth (C-137)"
      },
      {
        "name": "Adjudicator Rick",
        "status": "Dead",
        "species": "Human",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Alien Rick",
        "status": "unknown",
        "species": "Alien",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Antenna Rick",
        "status": "unknown",
        "species": "Human",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Aqua Rick",
        "status": "unknown",
        "species": "Humanoid",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Black Rick",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Bootleg Portal Chemist Rick",
        "status": "Dead",
        "species": "Human",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Commander Rick",
        "status": "Dead",
        "species": "Human",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Cool Rick",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": "Earth (K-83)"
      },
      {
        "name": "Cop Rick",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Cowboy Rick",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Cronenberg Rick",
        "status": "unknown",
        "species": "Cronenberg",
        "gender": "Male",
        "origin": "Cronenberg Earth"
      },
      {
        "name": "Cyclops Rick",
        "status": "Dead",
        "species": "Humanoid",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Doofus Rick",
        "status": "unknown",
        "species": "Human",
        "gender": "Male",
        "origin": "Earth (J19ζ7)"
      },
      {
        "name": "Evil Rick",
        "status": "Dead",
        "species": "Humanoid",
        "gender": "Male",
        "origin": "unknown"
      },
      {
        "name": "Garment District Rick",
        "status": "Dead",
        "species": "Human",
        "gender": "Male",
        "origin": "unknown"
      }
    ]);
  },
  down: (queryInterface) => {
    if (queryInterface.context) {
      queryInterface = queryInterface.context;
    }
    return queryInterface.bulkDelete(USER_TABLE, null, {});
  }
};
