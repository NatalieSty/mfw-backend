const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const multer = require('multer');
const fs = require('fs');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    const user = {
        username: req.body.username,
        password: req.body.password
    };

    // Save user in the database
    User.create(user)
        .then(data => {
            res.send(`user has been created.`);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
}

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    

    User.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};