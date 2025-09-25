const UserService = require('./../services/user.service');
const service = new UserService();


const getUSer = async (_, { id }) => {
  const user = await service.findOne(id);
  return user;
}

const getUsers = async () => {
  const users = await service.find({});
  return users;
}

module.exports = { getUSer, getUsers };