const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/:noteId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:noteId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:noteId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
