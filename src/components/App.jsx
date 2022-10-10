import MovieDetails from "pages/MovieDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import Casts from "./Casts";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Navigate to="home"/>} />
          <Route path="home" element={<Home />}/>
    
          <Route path="movies" element={<Movies />} />
          {/* <Route index element={ <div>HOHOHO</div>} /> */}
          <Route path="movies/:moviesId" element={<MovieDetails />} >
            <Route path="casts" element={<Casts/>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
          <Route path="*" element={ <div>Stop! It`s WRONG URL!!!</div>} /> 
        </Route>
      </Routes>
    </>
  );
};
