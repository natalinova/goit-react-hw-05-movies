import { lazy } from 'react';
import MovieDetails from "pages/MovieDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import Casts from "./Casts";
import Reviews from "./Reviews";

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'))
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={ <Navigate to="home"/>} />
          <Route path="home" element={<Home />}/>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />} >
            <Route path="casts" element={<Casts />} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>
          <Route path="*" element={ <div>Stop! It`s WRONG URL!!!</div>} /> 
        </Route>
      </Routes>
    </>
  );
};
