const router = require("express").Router();
const { User } = require("../../models");

// Get all users
router.get("/", (req, res) => {
    User.findAll({
        attributes: { exclude: ["password"] }
    })
    .then((data) => res.status(200).json(data))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Create a new user
router.post("/", (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password   
    })
    .then((data) => {
        req.session.save(() => {
            req.session.user_id = data.id;
            req.session.email = data.email;
            req.session.loggedIn = true;
            res.status(200).json(data);
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;