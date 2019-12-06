import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let REQUST_URL = API_URL;
    if(limit > 0){
        REQUST_URL += `limit=${limit}`;
    }
    if(rating > 0){
        REQUST_URL += `&minimum_rating=${rating}`;
    }

    return fetch(REQUST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
}
    