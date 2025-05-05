{
  //
  // mapped types

  const arrayNumber: number[] = [1, 2, 3, 4, 5];
  const arrOfString: string[] = arrayNumber.map((number) => number.toString());
  //   console.log(arrOfString); // ['1', '2', '3', '4', '5']

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // lock up type.

  // with generic way mapped types
  type ArrayString<T> = {
    [key in keyof T]: T[key]; // look up type.
  };

  const area1: ArrayString<{ height: number; width: string }> = {
    height: 1,
    width: "2",
  }; // using generic way lock up type use.
  console.log(area1); // { height: 1, width: '2' }
  //
}
