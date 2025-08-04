const express = require('express');
const PORT = process.env.PORT;
const app = express();

app.get('/', (req, res) => {
    res.send("Index");
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});