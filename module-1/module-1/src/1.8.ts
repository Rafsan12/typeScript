// Destructuring

// Object destructuring

const person = {
  firstName: "Rafsan",
  middleName: "Ahmed",
  lastName: "Raj",
};

const { firstName, middleName, lastName } = person; // this will create 3 variables firstName, middleName and lastName with the values of the properties of the object.

// array destructuring
const myFriends = ["Rafsan", "Rafiq", "Rafi", "Avro", "Firoz", "Mahi"];

const [, , bestFriend, ...restFriends] = myFriends; // this will create 2 variables bestFriend and restFriends with the values of the elements of the array.
