const ricepotato = {
    name: "ricepotato",
    age: 35,
    gender: "female"
}

const resolvers = {
    Query: {
        person: () => ricepotato
    }
};

export default resolvers