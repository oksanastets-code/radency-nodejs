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
  next(error)
}
})

router.get('/:noteId', async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const result = await notesOperations.getNoteById(noteId);
    if (!result) {
      const error = new Error(`Note with id=${noteId} not found`)
      error.status = 404;
      throw error;
    }
    res.json({
       status: "success",
    code: 200,
    data: {
      result
    }
    })
  } catch (error) {
    next(error);  
   
  }
  
})

router.post('/', async (req, res, next) => {
try {
  const result = await notesOperations.addNote(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result
    }
  })
} catch (error) {
  next(error)
}
 
})

router.delete('/:noteId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:noteId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
