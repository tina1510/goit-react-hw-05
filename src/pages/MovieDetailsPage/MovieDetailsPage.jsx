import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { Suspense, useEffect, useRef, useState } from "react"
import { fetchMoviesID } from "../../movies-api";
import css from "./MovieDetailsPage.module.css"

const MovieDetailsPage = () => {
const location = useLocation();
    
    const backLinkRef = useRef(location.state ?? "/movies")
    
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)

     useEffect(() => {
        async function getData() {
            try {
                const data = await fetchMoviesID(movieId);
                setMovie(data)    
                console.log(data);
            }
            catch (error) {
                console.log(error);
            }
        }
        getData();
    },[movieId])

    return (
        
        <div>
            <Link to={backLinkRef.current}><button className={css.btnBack}>Go to back</button></Link>
            {movie && (
                <div className={css.filmCard}>
                       <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                    <div><p className={css.title}>{movie.title} ({movie.release_date.split('-')[0]})</p>
                    <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                    
                 <p className={css.textBold}> Overview</p>
                    <p>{movie.overview}</p>
                    <p className={css.textBold}>Genres</p>
                   <p> { movie.genres.map((ganre) =>(
                       ganre.name
                    )
                    ).join(", ")}</p>
</div>
                    

                </div>
            )}
            <hr />
            <p className={css.information}>Additional information</p>
            <ul>
                <li>
                    <NavLink className={css.link} to="cast">Cast</NavLink>
                </li>
                <li>
                    <NavLink className={css.link} to="reviews">Reviews</NavLink>
                </li>
            </ul>
            <hr />
            <Suspense fallback={null} >
                   <Outlet></Outlet>
         </Suspense>
        </div>
    )
}
export default MovieDetailsPage