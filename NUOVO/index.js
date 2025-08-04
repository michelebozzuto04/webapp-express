const express = require('express');
const PORT = process.env.PORT;
const app = express();
const MovieRouter = require('./routes/MovieRouter');
const cors = require('cors');

app.use(cors())

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Index");
});

app.use('/api/movies', MovieRouter);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});