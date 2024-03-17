
import axios from "axios";
axios.defaults.baseURL = `https://api.themoviedb.org/3`;


export const getMovies = async () => {
    const response = await axios.get(`/trending/movie/day?language=en-US`, {
    
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDFmNTUyM2JmZDMwMzgwZDgzMGJkNDlkNDY2NTYzNCIsInN1YiI6IjY1ZjQ1MTEwMjRmMmNlMDE4NTE3YzhhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HIb8jZ-ZKx4Mq-l-UiQ3tvWEkZ3H66d2N8zGay0rcVw'
        }
    });
    return response.data.results;
};


export const fetchMoviesID = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`, {
        params: {
            language: 'en-US'
        },
         headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDFmNTUyM2JmZDMwMzgwZDgzMGJkNDlkNDY2NTYzNCIsInN1YiI6IjY1ZjQ1MTEwMjRmMmNlMDE4NTE3YzhhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HIb8jZ-ZKx4Mq-l-UiQ3tvWEkZ3H66d2N8zGay0rcVw'
        }
    }
    );
    return response.data;
};


 export const fetcSearchhMovies = async (query, page = 1) => {
    const response = await axios.get(`/search/movie`, {
        params: {
            query,
            include_adult: false,
            language: 'en-US',
            page,
 
        },

        headers: {

            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDFmNTUyM2JmZDMwMzgwZDgzMGJkNDlkNDY2NTYzNCIsInN1YiI6IjY1ZjQ1MTEwMjRmMmNlMDE4NTE3YzhhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HIb8jZ-ZKx4Mq-l-UiQ3tvWEkZ3H66d2N8zGay0rcVw'
        }
    });
    return response.data.results;
};

export const getMoviesCredits = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`, {
        params: {
            language: 'en-US'
        },
         headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDFmNTUyM2JmZDMwMzgwZDgzMGJkNDlkNDY2NTYzNCIsInN1YiI6IjY1ZjQ1MTEwMjRmMmNlMDE4NTE3YzhhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HIb8jZ-ZKx4Mq-l-UiQ3tvWEkZ3H66d2N8zGay0rcVw'
        }
    }
    );
    return response.data.cast;
};

export const getMoviesReviews = async (movieId, page=1) => {
    const response = await axios.get(`/movie/${movieId}/reviews`, {
        params: {
            language: 'en-US',
            page,
        },
         headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDFmNTUyM2JmZDMwMzgwZDgzMGJkNDlkNDY2NTYzNCIsInN1YiI6IjY1ZjQ1MTEwMjRmMmNlMDE4NTE3YzhhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HIb8jZ-ZKx4Mq-l-UiQ3tvWEkZ3H66d2N8zGay0rcVw'
        }
    }
    );
    return response.data.results;
};


