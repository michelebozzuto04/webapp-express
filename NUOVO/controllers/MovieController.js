const connection = require('../database/Connection');

function index(req, res) {

    return (
        res.send("Ciao")
    )
};

function show(req, res) {

    const id = req.params.id;

    return (
        res.send(`${id}`)
    )
};

module.exports = { index, show };