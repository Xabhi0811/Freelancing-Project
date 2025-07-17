// services/user.service.js
const userModel = require('../models/user.models');

const createUser = async ({ firstname, lastname, password }) => {
  if (!firstname || !lastname ||!password) {
    throw new Error('All fields are required');
  }

  const user = await userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    password,
  });

  return user;
};

module.exports = {
  createUser,
};
