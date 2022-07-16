const express = require('express')
const router = express.Router()
const controllers = require('../controllers/book')

router.get('/', controllers.getAllBook)

router.get('/:title', controllers.getBookByTitle)

router.post('/', controllers.postBook)

router.put('/:title', controllers.updateBook)

router.delete('/:title', controllers.deleteBook)

module.exports = router

