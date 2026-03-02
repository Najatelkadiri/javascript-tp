import { Router } from "express";
import { createBook, deleteBook, getAllBooks, getBooksById, updateBook } from "../Controllers/BookController.js";

const router = Router();

router.get('/',getAllBooks);
router.get('/:id',getBooksById);
router.post('/',createBook);
router.delete('/:id',deleteBook);
router.put('/:id',updateBook);
export default router;