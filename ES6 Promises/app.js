const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'},
  {title: 'Post Three', body: 'This is post three'},
];

// ES6 Promises

function createPost(post) {
  return new Promise(function(resolve,reject) {
    setTimeout(function() {
      posts.push(post)

      const error = false;
      if(!error) {
        // Replace the callback with a Resolve
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Four', body: 'This is post four'})
.then(getPosts)
.catch(function(err) {
  console.log(err);
});