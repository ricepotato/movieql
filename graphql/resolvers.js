import { people, getById } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
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