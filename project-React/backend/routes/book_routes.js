import express from 'express'
import { getAllBooks,deleteBook,addBook,getBookbyID } from '../controllers/books_controller.js';

const router= express.Router()

router.get("/",getAllBooks);
router.delete("/:id",deleteBook);
router.post("/",addBook);
router.get("/:id",getBookbyID);


router.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;