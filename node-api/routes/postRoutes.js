const express = require('express')
const postController = require('../controllers/postController')

const router = express.Router();

router.post('/', postController.save);
router.get('/:id', postController.show)

module.exports = router;