import MoviesCard from "../components/MoviesCard"

// Creiamo un film di prova per testare il funzionamento
const placeholderMovie = {
  id: 1,
  title: "Inception",
  director: "Christopher Nolan",
  abstract: "Un ladro che ruba segreti aziendali attraverso l'uso della tecnologia di condivisione dei sogni...",
  image: "https://placehold.co/600x400"
};

function Home() {
  return (
    <>
      <h1 className="text-primary p-5">HOME PAGE MOVIES</h1>
      <h2>Benvenuto nella community degli appassionati di film</h2>
      
      <div className="row row-cols-1 row-cols-md-3 mt-4 p-5">
        {/* Passiamo il film di prova come prop "movies" */}
        <MoviesCard movies={placeholderMovie} />
      </div>
    </>
  )
}

export default Home;