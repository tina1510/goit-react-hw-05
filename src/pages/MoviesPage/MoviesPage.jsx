import { useEffect, useState } from "react"
import MovieList from "../../MovieList/MovieList"
import {fetcSearchhMovies} from "../../movies-api"
import { useSearchParams } from "react-router-dom"
import css from "./MoviesPage.module.css"

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams("");
   const [isLoading, setIsLoading] = useState(false);
    const onSearch = (query) => {
        setSearchParams({query});
    }
    useEffect(() => {
          const query = searchParams.get('query');
                 if (!query) {
            return
                    }
        async function getData() {
            try {
                      setIsLoading(true);
                const data = await fetcSearchhMovies(query);
                setMovies(data);
            }
            catch (error) {
                console.log(error);
            }
               finally {
         setIsLoading(false);
    }
        }
        getData();
    }, [searchParams]);
    
 const handleSearchButtonClick = async () => {
        onSearch(searchParams);
  
    };
    return (
        <div>
          
                <input className={css.input} type="text" defaultValue= "" onChange={(e) => setSearchParams(e.target.value)}></input>
            <button className={css.btnSearch} onClick={handleSearchButtonClick} type="button">Search</button>
            {isLoading && (<p>Loading...</p>)}
          
             <div>
      
                {movies.length > 0 && 
                     <MovieList movies={movies} />

                }
           
        </div>
        </div>
    )
}


export default MoviesPage

