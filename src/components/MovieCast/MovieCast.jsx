import { useParams } from "react-router-dom";
import { getMoviesCredits } from "../../movies-api";
import { useEffect, useState } from "react"
import css from "./MovieCast.module.css"

const MovieCast = () => {
const { movieId } = useParams();
    const [casts, setCasts] = useState([])

     useEffect(() => {
        async function getData() {
            try {
                const data = await getMoviesCredits(movieId);
                setCasts(data)
            }
            catch (error) {
                console.log(error);
            }
        }
        getData();
    },[movieId])


    return (
        <div>
           
            <ul>
                {casts && casts.map((cast) => (
                    <li key={cast.cast_id}>

                        <img className={css.image} src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt="" />
                        <p className={css.name}>{cast.name}</p>
                        <p>Character: {cast.character}</p>
                       
                </li>
      ))}

         </ul>
        </div>
         )
}
export default MovieCast