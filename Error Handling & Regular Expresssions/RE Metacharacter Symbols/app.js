
let re; 

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;   // Must start with h
re = /d$/i;   // Must end with d
re = /^hello$/i;  // Must start and end with hello
re = /h.llo/i;  // Matches any ONE character;
re = /h*llo/i;  // Matches any character 0 or more times
re = /gre?a?y/i;  // Optional character
re = /gre?a?y\?/i;  // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i;  // Must be an a or e
re = /[GF]ray/;  // Must be an G or F
re = /[^GF]ray/i;  // Match anything except for G or F
re = /[A-Z]ray/;  // Match any uppercase letter
re = /[a-z]ray/;  // Match any lowercase letter
re = /[A-Za-z]ray/;  // Match any letter
re = /[0-9]ray/;  // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;  // Must occur exately {m} amount of times
re = /Hel{2,4}o/i;  // Must occur exately {m} amount of times
re = /Hel{2,}o/i;  // Must occur at least {m} amount of times

// Parethesis () - Grouping
re = /^([0-9]x){3}/i;  // Must occur exately {m} amount of time

// Shorthand Characters Classes
re = /\w/;  // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/;  // Non-character
re = /\d/;  // Match any digit
re = /\d+/;  // Match any digit 0 or more times
re = /\D/;  // Match any Non-digit
re = /\s/;  // Match whitespace character
re = /\S/;  // Match Non-whitespace character
re = /Hello/i;  // Match Non-whitespace character

//  Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if Not followed by y

// String to Match
const str = 'xy';

const result = re.exec(str)
console.log(result);

function reTest(re,str) {
  if(re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT Match ${re.source}`);
  }
}

reTest(re,str);