const connection = require('../database/Connection');

function index(req, res) {

    const sql = "SELECT * FROM movies"

    connection.query(sql, (error, result) => {

        if (error) return (
            res.status(500).json({
                error: true,
                message: error.message
            })
        )

        res.json(result);
    })
};

function show(req, res) {

    const id = req.params.id;

    return (
        res.send(`${id}`)
    )
};

module.exports = { index, show };