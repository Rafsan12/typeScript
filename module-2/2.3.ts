{
  //
  // Generics

  // Generics are a way to create reusable components that can work with any data type.

  type GenericsArray<T> = Array<T>; // / Array<T> is a built-in generic type in TypeScript that represents an array of type T.This parameter T is a placeholder dynamic type that will be replaced with a specific type when the generic type is used.

  const stringArray: GenericsArray<string> = ["a", "b", "c"];
  const numberArray: GenericsArray<number> = [1, 2, 3];
  const booleanArray: GenericsArray<boolean> = [true, false, true];

  // Generics can also be used with Object.

  const user: GenericsArray<{ name: string; age: number }> = [
    { name: "Rafsan", age: 25 },
    { name: "Ahmed", age: 25 },
  ]; // you have to specify the type of the object inside the array.Otherwise it will be considered as any type and also it will change object properties, it you define only object . You have to specify the type of the object inside the array.Otherwise it will be considered as any type and also it will change object properties, it you define only object . You have to specify the type of the object inside the array.

  // Generics can also be used with Tuple.
  type GenericsTuple<X, Y> = [X, Y];

  const userWithEmail: GenericsTuple<string, string> = [
    "Rafsan",
    "r@gmail.com",
  ];

  const userWithID: GenericsTuple<number, { name: string; age: number }> = [
    123,
    { name: "Rafsan", age: 25 },
  ];

  // Generics can also be used with Interface.

  interface Developer<T, X = null> {
    name: string;
    age: number;
    smartWatch: T;
    bike?: X; // optional property
  } // X=null means that the bike property is optional and can be of any type or null. You can also use a specific type instead of null.

  // For clean code you can also define type or interface for smartWatch and bike.

  type AppleWatch = {
    brand: string;
    model: string;
    price: number;
  };

  interface Bike {
    brand: string;
    model: string;
    price: number;
  }

  const richDev: Developer<AppleWatch, Bike> = {
    name: "Rafsan",
    age: 25,
    smartWatch: {
      brand: "Apple",
      model: "Series 8",
      price: 999,
    },
    bike: {
      brand: "Yamaha",
      model: "R1",
      price: 20000,
    },
  };

  interface SamsungWatch {
    brand: string;
    model: string;
    price: number;
  }

  const poorDev: Developer<SamsungWatch> = {
    name: "Ahmed",
    age: 25,
    smartWatch: {
      brand: "Samsung",
      model: "Galaxy Watch 5 Pro",
      price: 499,
    },
  };
  // console.log(richDev, poorDev);

  //
}
