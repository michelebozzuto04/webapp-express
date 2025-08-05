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

        const movie = result[0];

        const reviews_sql = 'SELECT id, name, vote, text, created_at  FROM reviews WHERE movie_id=?'

        connection.execute(reviews_sql, [id], (err, result) => {
            if (err) return res.status(500).json({
                error: true,
                message: err.message
            })

            const movieReviews = result;
            movie.reviews = movieReviews;

            res.json(movie);
        })
    })
}

// store
function store(req, res) {
    const { id } = req.params;
    const { name, vote, text } = req.body

    const sql = 'INSERT INTO `reviews` (`movie_id`, `name`, `vote`, `text`) VALUES (?, ?, ?, ?)';

    connection.execute(sql, [id, name, vote, text], (error, result) => {
        if (error) return res.status(500).json({
            error: true,
            message: error.message
        })

        res.send("Review added successfully.")
    })
}

module.exports = { index, show, store };