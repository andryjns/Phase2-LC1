const Quote = require('./../models/quote')


module.exports = {

    createNew: function (req, res) {
        let auth = req.headers.access_token
        console.log(auth)

        const newQuote = new Quote({
            status: req.body.status,
            //user: req.headers.access_token
        })

        newQuote.save(function (err, data) {
            if (!err) {
                res.status(201).json({
                    data: data
                })
            } else {
                res.status(500).json({
                    msg: err.message
                })
            }
        })
    },

    findAll: function (req, res) {
        Quote.find(function (err, data) {
            if (!err) {
                res.status(200).json({
                    data
                })
            } else {
                res.status(500).json({
                    msg: err.message
                })
            }
        })
    },

    deleteOne: function (req, res) {
        Quote.deleteOne({
            _id: req.params.id
        }, function (err) {
            if (!err) {
                res.status(200).json({
                    "success": true,
                    "message": `Quote with id ${Quote._id} deleted`
                })
            } else {
                res.status(500).json({
                    msg: err.message
                })
            }
        })
    },

}