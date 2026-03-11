import Book from "../models/books.js";


export async function getAllBooks(req,res){
    const books=await Book.find();
    res.send(books)
}

export async function deleteBook(req,res){
    const id =req.params.id;
    const book = await Book.findbyIdandDelete(id)
    res.send(book)
}

export async function addBook(req,res){
    let bookNew=req.body
    bookNew= Book.create(bookNew);
    res.json(bookNew)
}

export function getBookbyID(req,res){
    const id =req.params.id;
    const book = books.find(b => b.id == id);
    res.json(book)
}