// 9 functions

// normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
// arrow function
const add2 = (num1: number, num2: number): number => {
  return num1 + num2;
};
// function with default parameter
function add3(num1: number, num2: number = 10): number {
  return num1 + num2;
}

// callback function
const arr: number[] = [1, 2, 3, 4, 5];
const newArr: number[] = arr.map((num: number): number[] => num * num);
