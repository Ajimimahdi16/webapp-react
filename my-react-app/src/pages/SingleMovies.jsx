import { Link } from "react-router-dom";

function SingleMovies() {


    return (
        <>
        <header id="movie" className="border-bottom border-1 mb-3 p-4">
            <h1>titolo del film </h1>
            <h3 className="text-muted"><i>nome dell'autore</i></h3>
            <p>hbwbebbjcncn</p>
        </header>
        <section id="reviews">
            <header className="d-flex justify-content-between align-it p-4">
                <h4>community reviews</h4>
            </header>
        </section>
        <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
            <Link className="bnt bnt-secondary p-4" to="/"> back to home</Link>
        </footer>
        

        </>
    )
}


export default SingleMovies