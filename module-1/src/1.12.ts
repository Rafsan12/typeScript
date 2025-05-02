{
  //nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log(`Searching for ${value}`);
    } else {
      console.log("No value provided");
    }
  };

  searchName(null); // No value provided
}
