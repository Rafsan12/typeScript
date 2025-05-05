{
  //
  //   Constraints
  // constraints means forcing the type of the generic to be a specific type.
  const addToCourseStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Developer Course";

    return {
      ...student,
      course,
    };
  };

  const student1 = addToCourseStudent({
    id: 1,
    name: "Rafsan",
    email: "rafsan@gmail.com",
  });
  console.log(student1); // { id: 1, name: "Rafsan", course: "Developer Course" }
  const student2 = addToCourseStudent({
    id: 2,
    name: "Ahmed",
    // email: "ahmed@gmail.com",
    smartWatch: "Apple Watch",
  });

  // using keyof operator to get the keys of the object.
  const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key]; // return type is T[K] means that the function will return the type of the key of the object.
  };

  const car = {
    brand: "BMW",
    model: "X5",
    price: 50000,
  };

  const carBrand = getProperty(car, "brand"); // carBrand is of type string
  console.log(carBrand); // BMW
  //
}
