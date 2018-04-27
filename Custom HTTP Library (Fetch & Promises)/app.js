
const http = new EasyHTTP();

http.get('https://api.github.com/users')
.then(data => console.log(data))
.catch(err => console.log(data));