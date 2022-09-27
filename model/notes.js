const fs = require("fs/promises");
const path = require("path");
// const { nanoid } = require("nanoid");

const notesPath = path.join(__dirname, "notes.json");

const listNotes = async () => {
   const data = await fs.readFile(notesPath);
  const notes = JSON.parse(data);
  return notes;
}

const getNoteById = async (noteId) => {
  const notes = await listNotes();
  const result = notes.find(note => note.id === noteId);
  if (!result) { return null; }
  return result;
}

const removeNote = async (noteId) => {
  const notes = await listNotes();
  const index = notes.findIndex(note => note.id === noteId);
  if (index === -1) {
    return null;
  }
  const [removedNote] = notes.splice(index, 1);
  await fs.writeFile(notesPath, JSON.stringify(notes));
  return removedNote;
}

// const addNote = async (body) => {
//   const notes = await listNotes();
//   const newNote = { id: nanoid(), ...body };
//   notes.push(newNote);
//   await fs.writeFile(notesPath, JSON.stringify(notes));
//   return newNote;
// }

const updateNote = async (noteId, body) => {
   const notes = await listNotes();
  const index = notes.findIndex((item) => item.id === noteId);
  if (index === -1) {
    return null;
  }
  notes[index] = { ...notes[index], ...body };
  await fs.writeFile(notesPath, JSON.stringify(notes));
  return notes[index];
}

module.exports = {
  listNotes,
  getNoteById,
  removeNote,
  // addNote,
  updateNote,
}
