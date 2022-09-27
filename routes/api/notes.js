const express = require('express')
const router = express.Router()

const notesOperations = require("../../model/notes")

router.get('/', async (req, res, next) => {
try {
  const notes = await notesOperations.listNotes()
  res.json({
    status: "success",
    code: 200,
    data: {
      result: notes
    }
  });
} catch (error) {
  res.status(500).json({
    status: "error",
    code: 500,
    message: "Server error"
  })
}
})

router.get('/:noteId', async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const result = await notesOperations.getNoteById(noteId);
    res.json({
       status: "success",
    code: 200,
    data: {
      result
    }
    })
  } catch (error) {
    res.status(500).json({
    status: "error",
    code: 500,
    message: "Server error"
  })
  }
  
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
