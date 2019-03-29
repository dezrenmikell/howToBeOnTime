const express = require('express')
const Tips= require('../models/Tips')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello world')
})

router.post('/', (req, res) => {
    res.send('hello world')
})
// /api/users/:userId
router.get('/:userId', (req, res) => {
   res.send('hello world')
})

router.post('/:userId/ideas', (req, res) => {
   res.send('hello world')
})

router.delete('/:userId/ideas/:ideaId', (req, res) => {
    res.send('hello world')
})

router.patch('/:userId/ideas/:ideaId', (req, res) => {
    res.send('hello world')
})


module.exports = router