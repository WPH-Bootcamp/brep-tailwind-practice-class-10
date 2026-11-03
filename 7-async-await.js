function test() {
  return 'Test';
}
console.log(test());

async function test2() {
  return 'Test';
}
console.log(test2().then((data) => console.log(data)));

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

fetchData();
