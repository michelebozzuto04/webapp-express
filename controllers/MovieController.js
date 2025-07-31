const connection = require('../database/db_connection');

// index
function index(req, res) {
    const sql = 'SELECT * FROM movies'

    connection.query(sql, (error, result) => {
        if (error) return (
            res.status(500).json({
                error: true,
                message: error.message
            })
        )
        console.log(result);

        res.json(result)
    })
}

// show
function show(req, res) {
    const { id } = req.params;

    const sql = 'SELECT * FROM movies WHERE id=?';

    connection.execute(sql, [id], (error, result) => {
        if (error) return res.status(500).json({
            error: true,
            message: error.message
        })

        if (result.length === 0) {
            return res.status(404).json({
                error: true,
                message: 'Not found'
            })
        }

        res.json(result)
    })
}

module.exports = { index, show };