const express = require('express');
const router = express.Router();
const movieController = require('../controllers/MovieController.js');

// index
router.get('/', movieController.index);

// show
router.get('/:id', movieController.show);

// store reviews
router.post('/:id/reviews', movieController.storeReview);

module.exports = router;