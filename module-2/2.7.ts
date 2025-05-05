{
  //
  // pick utlity types
  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: string;
  };

  type NameAge = Pick<Person, "name" | "age">; // pick only name and age from Person type
  const person: NameAge = {
    name: "Rafsan",
    age: 30,
  };
  console.log(person); // { name: 'Rafsan', age: 30 }

  // Omit utility types
  type ContactInfo = Omit<Person, "name" | "age">; // omit means remove name and age from Person type
  const contact: ContactInfo = {
    email: "r@gmail.com",
    phone: "123456789",
  };
  console.log(contact); // { email: 'r@gmail.com', phone: '123456789' }

  // Required utility types
  type PersonRequired = Required<Person>; // make all properties required

  // Partial utility types

  type PersonPartial = Partial<Person>; // make all properties optional

  // Readonly utility types
  type PersonReadonly = Readonly<Person>; // make all properties readonly

  // Record utility types
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<string, number>;

  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
    e: 6,
  };

  //
}
