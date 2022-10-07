import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>} >
          <Route path="/" element={ <Home/>} />
        </Route>
        <Route path="/movies" element={ <Movies/>} /> 
      </Routes>
    </>
  );
};
