import MoviesCard from "../components/MoviesCard";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]); 

  useEffect(() => {
    
    axios.get("http://localhost:3000/movies")
      .then(res => {
        setMovies(res.data); 
      })
      .catch(err => console.error("Errore nel caricamento:", err));
  }, []);

  return (
    <>
      <h1 className="text-primary p-5">HOME PAGE MOVIES</h1>
      <h2>Benvenuto nella community degli appassionati di film</h2>
      
      <div className="row row-cols-1 row-cols-md-3 mt-4 p-5">
       
        {movies.map(movie => (
          <MoviesCard key={movie.id} movies={movie} />
        ))}
      </div>
    </>
  );
}

export default Home;