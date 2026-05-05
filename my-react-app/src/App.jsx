
import Home from "./pages/Home";
import SingleMovies from "./pages/SingleMovies";
import DefaultLayout from "./layout/DefaultLayout";


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<SingleMovies />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
