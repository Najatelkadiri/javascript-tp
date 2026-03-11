import { useEffect, useState } from "react";
import axios from "axios";

export default function BookCard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Liste des livres</h1>

      {books.length === 0 ? (
        <p>Chargement des livres...</p>
      ) : (
        <table style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "50%"
        }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Titre</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book._id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{book._id}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{book.titre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}