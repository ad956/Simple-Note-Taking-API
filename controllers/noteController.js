const Note = require("../model/noteModel");

// Create a new note with data validation
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validate input
    if (
      !title ||
      !content ||
      typeof title !== "string" ||
      typeof content !== "string"
    ) {
      return res
        .status(400)
        .json({ error: "Invalid input. Title and content are required." });
    }

    if (title.length > 255) {
      return res.status(400).json({
        error: "Title is too long. Maximum length is 255 characters.",
      });
    }

    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.json(savedNote);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update the content of an existing note with data validation
exports.updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validate input
    if (
      !title ||
      !content ||
      typeof title !== "string" ||
      typeof content !== "string"
    ) {
      return res
        .status(400)
        .json({ error: "Invalid input. Title and content are required." });
    }

    if (title.length > 255) {
      return res.status(400).json({
        error: "Title is too long. Maximum length is 255 characters.",
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a single note by ID
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a note by ID
exports.deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ error: "Note not found" });
    }
    res.json(deletedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
