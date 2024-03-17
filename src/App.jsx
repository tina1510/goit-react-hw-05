
import { Routes, Route} from "react-router-dom";
import Navigation from "./Navigation/Navigation";

import { Suspense, lazy } from "react";

const HomePage = lazy(() => import ("./pages/HomePage/HomePage"));
const MoviesPage  = lazy(() => import ("./pages/MoviesPage/MoviesPage"));
const NotFaundPage = lazy(() =>  import ("./pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./components/MovieReviews/MovieReviews"));

function App() {


  return (
    <>
      <Navigation/>
   
      <Suspense fallback={null}>
             <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews
          />} />
          
          </Route>
        
           <Route path="*" element={<NotFaundPage />} />
        
      </Routes>
    
 </Suspense>
    </>
  )
}

export default App
