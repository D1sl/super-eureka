const { User } = require("../models");

const userData = [
    {
        email: "User1",
        password: "password",
    },
    {
        email: "User2",
        password: "password",
    },
    {
        email: "User3",
        password: "password",
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;