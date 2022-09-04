// const person: { name: string; age: number } = {
//   name: "hamza",
//   age: 26,
// };


// to get auto completion we let type script infer our property types
const person = {
  name: "hamza",
  age: 26,
};

person.age = 23;

type person = { name: string; age: number };

const worker: person = {
  name: "herkul",
  age: 20000,
};
