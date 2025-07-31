const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Welcome to my app');
})