import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SingleMovies() {
    const { id } = useParams(); 
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => setMovie(res.data)) 
            .catch(err => console.error(err));
    }, [id]);

    if (!movie) return <div className="p-5">Caricamento...</div>;

    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3 p-4">
                <h1>{movie.title}</h1>
                <img src={movie.image} alt={movie.title} style={{maxWidth: '300px'}} className="mb-3" />
                <h3 className="text-muted"><i>{movie.director}</i></h3>
                <p>{movie.abstract}</p>
            </header>

            <section id="reviews" className="p-4">
                <h4>Community Reviews</h4>
                {movie.reviews && movie.reviews.length > 0 ? (
                    <ul className="list-group">
                        {movie.reviews.map(rev => (
                            <li key={rev.id} className="list-group-item">
                                <strong>{rev.name}</strong>: {rev.text} (Voto: {rev.vote})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Nessuna recensione presente.</p>
                )}
            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary p-4" to="/"> back to home</Link>
            </footer>
        </>
    );
}

export default SingleMovies;