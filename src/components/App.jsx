import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}/>
    
        <Route path="movies" element={ <Movies/>} />
        </Route>
           {/* стартова сторінка */}
        
           {/* інпут пошуку  - мувіс */}
        
       
      </Routes>
    </>
  );
};
