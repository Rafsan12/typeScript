{
  // spread operator
  const bro1: string[] = ["Rafsan", "Ahmed", "Rafiq"];
  const bro2: string[] = ["Avro", "Firoz", "Mahi"];
  bro1.push(...bro2); // this will add all the elements of bro2 to bro1.

  const bro3 = {
    name: "Rafsan",
    age: 30,
  };
  const bro4 = {
    name: "Rafiq",
    age: 25,
  };

  const bro5 = {
    ...bro3,
    ...bro4,
  }; // this will add all the properties of bro3 and bro4 to bro5.

  // rest operator
  const getFriends = (...friends: string[]) => {
    friends.forEach((friend) => {
      console.log(friend);
    });
  };
  getFriends("Rafsan", "Rafiq", "Rafi", "Avro", "Firoz", "Mahi");
  // this will add all the elements of bro2 to bro1.
}
