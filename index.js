const express = require('express');
const app = express();
const PORT = process.env.PORT;
const movieRouter = require('./routes/movies');

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Welcome to my app');
})

app.use('/api/movies', movieRouter);