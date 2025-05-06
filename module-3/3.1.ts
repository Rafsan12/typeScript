{
  //
  // OOP-Class

  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    // you can create a function inside a class and use it as a method
    // keep in mind that you can use this keyword to access the class properties, you don't use arrow function here
    makeSound() {
      console.log(`${this.name} makes ${this.sound} sound`);
    }
  }

  // create an object of the class
  const dog = new Animal("Dog", "Dog", "Bark");
  // call the method of the class
  dog.makeSound(); // Dog makes Bark sound
  // create another object of the class
  const cat = new Animal("Cat", "Cat", "Meow");
  // call the method of the class
  cat.makeSound(); // Cat makes Meow sound

  // In  the above code example, you can notice that we re-write same code again in the constructor of the class.

  // To avoid this repetition, we can use parameter properties in the constructor.

  class Animal2 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound2() {
      console.log(`${this.name} makes ${this.sound} sound`);
    }
  }

  // create an object of the class
  const dog2 = new Animal2("Dog", "Dog", "Bark");
  // call the method of the class
  dog2.makeSound2(); // Dog makes Bark sound
  //
}
