
export const people = [
    {
        id: 0,
        name: "ricepotato",
        age: 35,
        gender: "male"
    },
    {
        id: 1,
        name: "h.e.",
        age: 22,
        gender: "female"
    },
    {
        id: 2,
        name: "g.h.",
        age: 28,
        gender: "female"
    },
    {
        id: 3,
        name: "yj",
        age: 29,
        gender: "female"
    }
]

let movies = [
    {
        id: 0,
        name: "star wars",
        score: 0.1
    },
    {
        id: 1,
        name: "avengers ",
        score: 8
    },
    {
        id: 2,
        name: "The godfather I",
        score: 99
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}

export const getByMovieId = id => {
    const filteredMovie = movies.filter(movie => id === movie.id);
    return filteredMovie[0];
}

export const getMovies = () => movies;

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(cleanedMovies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}