import MoviesCard from "../components/MoviesCard"

 
function Home() {
  

  return (
    <>
    <h1 className="text-primary p-5">HOME PAGE MOVIES</h1>
    <h2>benvenuta nella community dei appasionati di film </h2>
    <div className="row row-cols-3 mt-4 p-5">
        <MoviesCard />

    </div>
    </>
  )
}

export default Home