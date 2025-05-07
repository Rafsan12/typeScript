{
  //
  // type Guards

  // type of --> type guards

  const add = (a: string | number, b: string | number): string | number => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else {
      return a.toString() + b.toString();
    }
  };

  const result1 = add(10, 20); // 30
  const result2 = add("10", "20"); // 1020

  // in guard

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getuser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const user1: NormalUser = { name: "Rafsan" };
  const user2: AdminUser = { name: "Rafsan", role: "admin" };
  getuser(user1); // My name is Rafsan
  getuser(user2); // My name is Rafsan and my role is admin

  // In OOP how to use type guards

  {
    // instanceof guard
    class Animal {
      name: string;
      species: string;

      constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
      }

      makeSound() {
        console.log("I am making sound");
      }
    }

    class Dog extends Animal {
      constructor(name: string, species: string) {
        super(name, species);
      }
      makeBark() {
        console.log("I am barking");
      }
    }

    class Cat extends Animal {
      constructor(name: string, species: string) {
        super(name, species);
      }
      makeMeaw() {
        console.log("I am mewaing");
      }
    }

    // smart way tge handle korar jnne chaile amra function bebohar krte pari
    const isDog = (animal: Animal): animal is Dog => {
      return animal instanceof Dog;
    };

    const isCat = (animal: Animal): animal is Cat => {
      return animal instanceof Cat;
    };

    const getAnimal = (animal: Animal) => {
      if (isDog(animal)) {
        animal.makeBark();
      } else if (isCat(animal)) {
        animal.makeMeaw();
      } else {
        animal.makeSound();
      }
    };

    const dog = new Dog("Dog Bhai", "dog");
    const cat = new Cat("Cat Bhai", "cat");

    getAnimal(cat);

    //
  }

  //
}
