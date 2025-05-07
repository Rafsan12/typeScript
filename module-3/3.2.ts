{
  //
  // OOP inheritance

  class Student {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }
  // create an object of the class
  const student = new Student("Rafsan", 20, "Sylhet");
  // call the method of the class
  console.log(student.name); // Rafsan

  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }
    // you can create a function inside a class and use it as a method
  }
  // create an object of the class
  const teacher = new Teacher("Rafsan", 20, "Sylhet", "lecturer");
  // call the method of the class
  console.log(teacher.name); // Rafsan

  // In the Student and Teacher class we have same properties name, age and address.There is a lot of code repetition.Using inheritance we can avoid this repetition.

  class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }

  class Student2 extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address); // call the constructor of the parent class
    }
  }

  class Teacher2 extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address); // call the constructor of the parent class
      this.designation = designation;
    }
  }
  //
}
