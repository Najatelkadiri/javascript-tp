import { useEffect, useState } from "react";
import axios from "axios";

export default function BookCard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios.get("http://localhost:5000/api/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);

      setBooks(books.filter(book => book._id !== id));

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Liste des livres</h1>

      {books.length === 0 ? (
        <p>Chargement des livres...</p>
      ) : (
        <table style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "60%"
        }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Titre</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map(book => (
              <tr key={book._id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{book._id}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{book.titre}</td>

                <td style={{ border: "1px solid black", padding: "8px" }}>
                  <button
                    onClick={() => deleteBook(book._id)}
                  
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}