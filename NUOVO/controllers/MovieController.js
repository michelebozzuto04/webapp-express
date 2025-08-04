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

    const { id } = req.params;
    const sql = "SELECT * FROM movies WHERE id = ?"

    connection.execute(sql, [id], (error, result) => {

        if (error) return (
            res.status(500).json({
                error: true,
                message: error.message
            })
        )

        if (result.length === 0) {
            res.status(404).json({
                error: true,
                message: 'Not found'
            })
        }

        const movie = result[0]

        const movie_review_sql = `SELECT * FROM reviews WHERE movie_id = ?`

        connection.execute(movie_review_sql, [id], (error, result) => {
            if (error) return (
                res.status(500).json({
                    error: true,
                    message: error.message
                })
            )

            const movieReviews = result;
            movie.reviews = movieReviews;

            res.json(movie)
        })
    })
};

module.exports = { index, show };