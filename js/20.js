//FECH API con Promises

const url = "http://jsonplaceholder.typicode.com/comments";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Hubo un error...");
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error.messaje));
