let books=[
    { id: 1, title: "Clean Code", author: "Robert C. Martin", price: 180 },
    { id: 2, title: "Node.js Guide", author: "Mohamed", price: 200 },
];
// GET /api/books
export const getAllBooks=(req,res)=>{
    res.status(200).json(books);
};
// GET /api/books/:id
export const getBooksById=(req,res)=>{
    const id=Number(req.params.id);
    const book=books.find((b)=>b.id===id);
    if(!book){
        return res.status(404).json({
            message:"Livre introuvable"
        });
    }
    res.status(200).json(book);
}
// POST /api/books
export const createBook = (req, res) => {
  const { title, author, price } = req.body;

  if (!title || !author || price === undefined) {
    return res.status(400).json({
      message: "Champs obligatoires manquants: title, author, price",
    });
  }

  const nextId = books.length ? books[books.length - 1].id + 1 : 1;

  const newBook = {
    id: nextId,
    title,
    author,
    price: Number(price),
  };

  books.push(newBook);
  res.status(201).json(newBook);
};
// DELETE /api/books/:id
export const deleteBook = (req, res) => {
  const id = Number(req.params.id);
  const exists = books.some((b) => b.id === id);

  if (!exists) return res.status(404).json({ message: "Livre introuvable" });

  books = books.filter((b) => b.id !== id);
  res.status(200).json({ message: "Livre supprimé avec succès" });
};
// PUT /api/books/:id
export const updateBook = (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) return res.status(404).json({ message: "Livre introuvable" });

  books[index] = { ...books[index], ...req.body, id };

  res.status(200).json(books[index]);
};