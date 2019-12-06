import { people, getById, getMovies, getByMovieId, addMovie } from "./db";


const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id),
        movies: () => getMovies(),
        movie: (_, { id }) => getByMovieId(id)
    },
    Mutation: {
      addMovie: (_, {name, score}) => addMovie(name, score)
    }
};

export default resolvers;


/*
person query

query{
  person(id:1){
    name
  }
}

people query
query{
  people{
    name
  }
}
*/