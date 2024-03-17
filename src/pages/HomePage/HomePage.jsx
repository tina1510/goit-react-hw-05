import { useEffect, useState } from "react"
import MovieList from "../../MovieList/MovieList"
import {getMovies} from "../../movies-api"
import css from "./HomePage.module.css"
const HomePage = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function getData() {
            try {
                const data = await getMovies("query");
                setMovies(data);
                
            }
            catch (error) {
                console.log(error);
            }
        }
        getData();
    },[])
    return (
        <div>
          <p className={css.text}>Trending today</p>
            <MovieList movies={movies} />
        </div>
    )
}
export default HomePage