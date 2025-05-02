{
  // type assertion
  // type assertion is a way to tell the compiler that you know better than it does about the type of a variable
  // it is a way to override the type inference of the compiler
  let anything: any;

  anything = "hello world";

  (anything as string).length; // 11

  const kgToGM = (value: number | string): number | string | undefined => {
    if (typeof value === "string") {
      return parseFloat(value) * 1000;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };

  console.log(kgToGM(2)); // 1000
}
