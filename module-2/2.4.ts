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
  //
}
