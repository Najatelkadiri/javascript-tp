import MessageBienvenue from "./MessageBienvenue.jsx"
import BookCard from "./BookCard.jsx"

function App() {
    return (
        <div>
            <h1>Ma bibliothèque en React</h1>
          
            <MessageBienvenue />
            <BookCard 
                titre="Le Petit Prince" 
                auteur="Antoine de Saint-Exupéry" 
                categorie="Roman" 
            />
            
            <BookCard 
                titre="Les Misérables" 
                auteur="Victor Hugo" 
                categorie="Littérature" 
            />
            
            <BookCard 
                titre="Clean Code" 
                auteur="Robert C. Martin" 
                categorie="Informatique" 
            />
        </div>
    )
}

export default App