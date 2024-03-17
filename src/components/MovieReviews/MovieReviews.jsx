import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getMoviesReviews } from "../../movies-api";
import css from "./MovieReviews.module.css"

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([])

     useEffect(() => {
        async function getData() {
            try {
                const data = await getMoviesReviews(movieId);
                setReviews(data)
             
                
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
                {reviews.length> 0 ? (reviews.map((review) => (
                    <li key={review.id}>

                        <p className={css.name}>Author: {review.author }</p>
                        <p>{review.content}</p>
                </li>
                ))) : (
                        <p>We don't have any reviws for this movie</p>
      ) }

         </ul>
        </div>
         )
}
export default MovieReviews