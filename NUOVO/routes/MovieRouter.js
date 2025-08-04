const express = require('express');
const router = express.Router();

//index
router.get('/', (req, res) => {
    res.send('Show all elements in db');
})

//show
router.get('/:id', (req, res) => {
    res.send(`Show element ${req.params.id} in the db`);
})

module.exports = router;