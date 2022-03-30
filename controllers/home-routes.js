const router = require("express").Router();
const { User } = require("../models");

// Homepage
router.get("/", (req, res) => {
    User.findAll({
        attributes: [
            "email"
        ]
    })
    .then((data) => {
        const users = data.map((user) => user.get({ plain: true }));
        res.render("homepage", { users, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;