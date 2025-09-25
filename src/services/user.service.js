const { models } = require('../db/sequelize');

class UserService {
  constructor() {}

  async find() {
    const rta = await models.User.findAll({});
    return rta;
  }


  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw new Error('user not found');
    }
    return user;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;