/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  //edge cases - if n is less than 0, return 1
  if (n < 0) { return null; }

  if (n === 0){
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
var sum = function(array) {
  var result = array[0];
  //base case
  if (array[0] === undefined) {
    return 0;
  }
  // recursive case
  return result + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
var arraySum = function(array) {
  var result = 0;

  for (var i = 0; i < array.length; i++){
    if (Array.isArray(array[i])){
      result += arraySum(array[i]);
    } else {
      result += array[i];
    }
  }

  return result;
};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);

  if (n < 2) {
    if (n === 0) {
      return true;
    } else {
      return false
    }
  }

  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
var sumBelow = function(n) {
  var isNegative = false;
  if (n < 0) {
    n = Math.abs(n);
    isNegative = true;
  }

  var result = n - 1;
  if (n === 0) {
    return 0;
  } else {
    result = result + sumBelow(n - 1);
  }

  if(isNegative) {
    return -Math.abs(result);
  } else {
    return result;
  }
};

// 6. Get the integers within a range (x, y).
var range = function(x, y) {
  //if startNum is less than endNum
  if (x > y) {
    x = x - 1;
  } else if (x < y) {
    x = x + 1;
  }

  // base case: if startNum equal endNum, return an empty array;
  if (x === y) { return []; }
  //recursive case: keep incrementing or decrementing start value until base case
  return [x].concat(range(x, y))
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
function exponent(base, exp) {
  if (exp === 0) { return 1; }

  if (exp < 0) { return 1 / base * exponent(base, exp + 1); }

  return base * exponent(base, exp - 1);
}

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(16) = 16 % 2 = 8 -> 8 % 2  = 4 -> 4 % 2 = 2;
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //edge case
  if (n === 1){ return true; }
  // base case: if n is less than 2, return false, if n is equal to 2, return true
  if (n < 2) {
    return false
  } else if (n === 2) {
    return true;
  }

  // recursive case: keep dividing n by 2 until base case
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var lastIndex = string.length -1;
  var reversed = string[lastIndex];

  return string.length === 1 ? reversed : reversed.concat(reverse(string.substring(0, lastIndex)))
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase();

  if (string === reverse(string)){
    return true;
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  // subtract y from x and save the result
  // if the result is bigger than y
  //repeat until the result is less than y

  var result = x;

  if (result < y){
    return result;
  } else {
    x -= y;
    return modulo(x, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  //accept = keep pushing the first letter, until string is empty
  //base case: if string is empty, return an empty string
  if (!str.length) { return [] };

  //recursive case: push the first letter until base case
  return [str[0]].concat(createArray(str.substring(1)))
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var lastIndex = array.length - 1;

  if (array.length === 0){
    return [];
  }

  return [array[lastIndex]].concat(reverseArr(array.slice(0, lastIndex)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  // create the count variable
  var count = 0;
  // traverse through the obj
  for (var key in obj){
    //if it's an obj, go inside the obj (recursively)
    if (typeof obj[key] === 'object'){
      count += countValuesInObj(obj[key], value);
    } else {
      if (obj[key] === value){
        count++;
      }
    }
  }
  //return count
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  //iterate through the obj
    for (var key in obj){
    //if I find the forsaken key
      if (key === oldKey){
      // change the name to the new blessed key
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
      }
      if (typeof obj[key] === 'object'){
        replaceKeysInObj(obj[key], oldKey, newKey)
      }
    }
  return obj
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];

  if (!Array.isArray(array)){
    result.push(array);
  }

  array.forEach(function(element){
    result = result.concat(flatten(element));
  })

  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
