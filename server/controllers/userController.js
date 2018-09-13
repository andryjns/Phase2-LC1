const User = require('./../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


module.exports = {

    register: function (req, res) {
        console.log(req.body)
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        newUser.save(function (err) {
            console.log(newUser)

            if (!err) {
                res.status(201).json({
                    "success": true,
                    "message": `Account ${newUser.name} registered`
                })
            } else {
                res.status(500).json({
                    msg: err.message
                })
            }
        });
    },


    login: function (req, res) {
        let input = {
            email: req.body.email
        }

        User.findOne(input, function (err, data) {
            if (err) {
                res.status(500).json({
                    msg: "Invalid email or password"
                })
            } else if (data === null || data === undefined) {
                res.status(404).json({
                    msg: "Not a valid email or password"
                })
            } else {
                let isPasswordValid = bcrypt.compareSync(req.body.password, data.password);
                if (isPasswordValid) {
                    jwt.sign({
                        email: data.email,
                        password: data.password
                    }, process.env.JWT_SECRET, function (err, token) {
                        res.status(201).json({
                            token: token
                        })
                    });
                } else {
                    res.status(403).json({
                        msg: "username/pass invalid"
                    })
                }

            }
        })
    },

}