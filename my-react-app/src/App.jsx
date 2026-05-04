import Header from "./components/Header";
import Home from "./pages/Home";
import SingleMovies from "./pages/SingleMovies";
import defaultLayout from "./layout/DefaultLayout";


import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<defaultLayout />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movies/:id" element={<SingleMovies />}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
