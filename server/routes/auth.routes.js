module.exports = app => {
    const auth = require("../controllers/auth.controller.js");
    var router = require("express").Router();

    // Create a new user
    router.post("/register", auth.create);
    // Retrieve all users
    router.get("/", auth.findAll);
    

 //login
    
    app.use('/api/auth', router);
};