{
  //union types

  type User = {
    name: string;
    age: number;
    gender: "male" | "female" | "other";
  };

  const user1: User = {
    name: "Rafsan",
    age: 22,
    gender: "male",
  };
  console.log(user1);

  //   intersection types
  type FrontendDev = {
    skills: string[];
    designation: "frontend";
  };

  type BackendDev = {
    skills: string[];
    designation: "backend";
  };
  type FullStackDev = FrontendDev & BackendDev;
  const user2: FullStackDev = {
    skills: ["html", "css", "js", "node", "express", "mongodb", "react"],
    designation: "frontend",
    designation: "backend",
  };
}
