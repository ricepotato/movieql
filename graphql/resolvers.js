
const people = [
    {
        name: "ricepotato",
        age: 35,
        gender: "male"
    },
    {
        name: "h.e.",
        age: 22,
        gender: "female"
    },
    {
        name: "g.h.",
        age: 28,
        gender: "female"
    },
    {
        name: "yj",
        age: 29,
        gender: "female"
    }
]

const resolvers = {
    Query: {
        people: () => people,
        person: (id) => people[id]
    }
};

export default resolvers