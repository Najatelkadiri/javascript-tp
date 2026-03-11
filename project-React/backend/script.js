import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Book from "./models/books.js";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const seedBooks = async () => {
  const initialBooks = [
    { titre: "Le Petit Prince" },
    { titre: "1984" },
    { titre: "Harry Potter" },
    { titre: "Les Misérables" },
    { titre: "Le Comte de Monte-Cristo" }
  ];

  const count = await Book.countDocuments();
  if (count === 0) {
    await Book.insertMany(initialBooks);
    console.log("Books seeded successfully");
  } else {
    console.log("Books collection already has data");
  }
};

// Route باش تجيب البيانات
app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/api/books/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server + MongoDB connection
const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected");
    await seedBooks();
    app.listen(5000, () => console.log("Server running on port 5000"));
  } catch (err) {
    console.error(err);
  }
};

startServer();