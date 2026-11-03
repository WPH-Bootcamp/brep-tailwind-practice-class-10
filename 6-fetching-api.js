fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message));
