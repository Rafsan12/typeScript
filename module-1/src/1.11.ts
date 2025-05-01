{
  //Ternary operator
  // The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

  const age: number = 15;
  if (age >= 18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }

  const message = age >= 18 ? "You are an adult." : "You are a minor.";
  console.log(message); // Output: You are a minor.

  // nullish coalescing operator
  // The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand.

  const isAuthenticated = undefined;
  const userName = isAuthenticated ?? "Guest";
  const userName2 = isAuthenticated ? "User" : "Guest";
  console.log(userName); // Output: Guest
  console.log(userName2); // Output: Guest

  // Optional chaining operator
  // The optional chaining operator (?.) is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to check if each reference in the chain is nullish (null or undefined).
  type User = {
    name: string;
    age: number;
    address: {
      permanentAddress: string;
      presentAddress: string;
    };
  };

  const user: User = {
    name: "Rafsan",
    age: 20,
    address: {
      permanentAddress: "Dhaka",
    },
  };

  const presentAddress1 = user.address.presentAddress;
  console.log(presentAddress1); // Output: undefined
  // The above line will throw an error if user.address is null or undefined.
  // To avoid this, we can use the optional chaining operator (?.) to safely access the property.
  const presentAddress = user.address?.presentAddress ?? "Not available";
  console.log(presentAddress); // Output: Not available
}
