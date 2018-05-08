
const user = {email: 'joe@gmail.com'};

try {
  // Will produce a ReferenceError
  // myFunction();
  
  // Will produce a TypeError
  // null.myFunction();

  // Will produce a SyntaxError
  // eval('Hello World');

  // Customize error
  if(!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');

  }

} catch(err) {
  console.log(`User Error ${err.message}`)
  // console.log(err);
  // console.log(err.message);
  // console.log(err.name);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('Program continues...')