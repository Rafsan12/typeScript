// 6.Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Rafsan", "Rafiq", "Rafi"];

7; // tuple
// you can use tuple to define a fixed length array with different types of data.
let person: [string, number] = ["Rafsan", 30]; // this is a tuple with 2 elements, first is string and second is number.

8; // object
// you can use object to define a complex data type with different properties.
let personObj: { name: string; age: number } = { name: "Rafsan", age: 30 };
let name: {
  firstName: string;
  middleName?: string; // optional property if any value is not provided it will be undefined.
  lastName: string;
} = {
  firstName: "Rafsan",
  lastName: "Rafi",
};

let name2: {
  companyName: "programming hero"; // this is a string literal type, it can only have this value.
  // you can use string literal type to define a fixed value for a property.
  firstName: string;
  lastName: string;
} = {
  companyName: "programming hero",
  firstName: "Rafsan",
  lastName: "Ahmed",
};
