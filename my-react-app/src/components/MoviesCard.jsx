
import { Link } from "react-router-dom";

function MovieCard({ movies }) {
  
  const { id, title, director, genre, release_year, abstract, image } = movies;

  return (
    <>
      <div className="card mb-4">
        {image && <img src={image} className="card-img-top" alt={title} />}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          
         
          <address>
            <i>By {director || 'Unknown Director'}</i>
          </address>
          
          <p className="card-text">{abstract}</p>
          
          
          <Link to={`/movies/${id}`} className="btn btn-primary">
            See more
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieCard;