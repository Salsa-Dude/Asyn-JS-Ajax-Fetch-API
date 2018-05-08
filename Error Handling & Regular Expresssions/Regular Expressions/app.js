
let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('hello world');
// console.log(result);

// test() - Returns true of false
// const result = re.test('Hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// search() - Return index of the first match and if not found returns -1
// const str = 'Joe Hello there';
// const search = str.search(re);
// console.log(search);

// replace() - Return a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re,'hi');
// console.log(newStr);