
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

export const getById = id => {
    const filteredPeople = people.filter(person => id === person.id);
    return filteredPeople[0];
}