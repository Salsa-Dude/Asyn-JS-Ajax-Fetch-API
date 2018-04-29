
async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();

  // Only proceed once second promise is resolved
  return data
}

getUsers().then(users => console.log(users));