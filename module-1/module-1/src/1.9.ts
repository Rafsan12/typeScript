{
  // Type Alice

  type UserName = {
    name: string;
    age: number;
  }; // you have to write firs letter in upper case and the rest in lower case

  const user: UserName = {
    name: "Alice",
    age: 25,
  };

  //As a type alias you can write any data type

  // type UserName2 = string , number , boolean , null , undefined;
  // you can write any data type in the type alias

  // type alice in the function

  //   const add = (a: number, b: number) => a + b;

  // using alias in the function
  type ADD = (a: number, b: number) => number;

  const add: ADD = (a, b) => a + b;
}
