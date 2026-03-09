import { useEffect, useState } from 'react'

function BookLike({ titre, auteur }) {
  return (
    <div style={{
      background: "#1e293b",
      color: "white",
      padding: "20px",
      marginTop: "20px",
      borderRadius: "15px"
    }}>
      <h3>{titre}</h3>
      <p>{auteur}</p>
    </div>
  )
}

function App() {
  const [livre, setLivre] = useState("Le Petit Prince")

  useEffect(() => {
    document.title = `Livre : ${livre}`
  }, [livre])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ma bibliothèque en React</h1>

      <p>Livre sélectionné : <strong>{livre}</strong></p>

      <button onClick={() => setLivre("Le Petit Prince")}>
        Livre 1
      </button>

      <button onClick={() => setLivre("Les Misérables")}>
        Livre 2
      </button>

      <button onClick={() => setLivre("Clean Code")}>
        Livre 3
      </button>

      <BookLike 
        titre={livre}
        auteur="Auteur variable"
      />
    </div>
  )
}

export default App