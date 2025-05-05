{
  //
  // Asynchronous TypeScript

  // create a promise that resolves to a string
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Hello World";

      if (data) {
        resolve(data);
      } else {
        reject("Error: No data found");
      }
    });
  };

  const showData = async () => {
    const data = await createPromise();
    // return data;
    console.log(data);
  };
  showData();

  //   with API
  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };
  getTodo();
  //
}
