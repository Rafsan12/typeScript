{
  // interface
  // all Primitive types we can use type alias and in object types we can use interface or type alias

  type User1 = {
    name: string;
    age: number;
  };

  const user1: User1 = {
    name: "Rafsan",
    age: 30,
  };
  console.log(user1); // { name: 'Rafsan', age: 30 }

  // interface is a way to define a contract for an object
  // it is a way to define the shape of an object

  interface User2 {
    name: string;
    age: number;
  }

  const user2: User2 = {
    name: "Rafsan",
    age: 30,
  };
  console.log(user2); // { name: 'Rafsan', age: 30 }

  // interface can be extended
  // we can create a new interface that extends the existing interface

  // type alias can also be extended but it is not recommended
  // because it is not as readable as interface and it is not as flexible as interface

  type User4 = User1 & {
    email: string;
  };

  interface User3 extends User2 {
    email: string;
  }

  const user3: User3 = {
    name: "Rafsan",
    age: 30,
    email: "rafsan@gmail.com",
  };

  console.log(user3); // { name: 'Rafsan', age: 30, email: 'rafsan@gmail.com' }

  // interface how to use in Arrays
  // we can use interface to define the shape of an array of objects

  interface Add {
    [index: number]: number;
  }

  // its recommended to use type alias for array, because it more code clear and readable.

  type Add1 = number[];

  // interface how to use in function

  interface Add2 {
    (a: number, b: number): number;
  }
  const add: Add2 = (a, b) => {
    return a + b;
  };
}
