// ----------------------------------------------------------------FUNDAMENTALS--------------------------------------------------------------
// 1. - Write a function that takes two numbers (a and b) as argument. 
//    - Sum a and b. Return the result
function myFunction (a, b) {
    return a + b;
}
console.log(myFunction(1,2));
console.log(myFunction(1,10));
console.log(myFunction(99,1));

// 2. - Write a function that takes two values, say a and b, as arguments. 
//    - Return true if the two values are equal and of the same type
function myFunction(a, b) {
  return a === b;
}
console.log(myFunction(2, 3));
console.log(myFunction(3, 3));
console.log(myFunction(1, '1'));
console.log(myFunction('10', '10'));

// 3. - Write a function that takes a value as argument. 
//    - Return the type of the value.
function myFunction(a) {
    return typeof a;
 }
console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction(null));
console.log(myFunction('string'));
console.log(myFunction(['array']));

// 4. - Write a function that takes a string (a) and a number (n) as argument. 
//    - Return the nth character of 'a'
function myFunction(a, n) {
    return a[n - 1]
  }
console.log(myFunction('abcd',1));
console.log(myFunction('zyxbwpl',5));
console.log(myFunction('gfedcba',3));

 // 5. - Write a function that takes a string (a) as argument. 
 //    - Remove the first 3 characters of a. Return the result
 function myFunction(a) {
    return a.slice(3);
  }
console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
 console.log(myFunction('fgedcba'));

// 6. - Write a function that takes a string as argument. 
//    - Extract the last 3 characters from the string. Return the result
function myFunction(str) {
    return str.slice(-3);
  }
console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));

// 7. - Write a function that takes a string (a) as argument. 
//    - Get the first 3 characters of a. Return the result
function myFunction(a) {
    return a.slice(0, 3);
}
console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));

// 8. - Write a function that takes a string as argument. 
//    - The string contains the substring 'is'. Return the index of 'is'.
function myFunction(a) {
    return a.indexOf('is');
}
console.log(myFunction("praise"));
console.log(myFunction("risky"));
console.log(myFunction("paris"));

// 9. - Write a function that takes a string (a) as argument. 
//    - Extract the first half a. Return the result
function myFunction(a) {
    return a.slice(0, a.length / 2);
}
console.log(myFunction('abcdefgh'));
console.log(myFunction('1234'));
console.log(myFunction('gedcba'));

//10. - Write a function that takes a string (a) as argument. 
//    - Remove the last 3 characters of a. Return the result
function myFunction(a) {
    return a.slice(0, -3);
}
console.log(myFunction('abcdefgh'));
console.log(myFunction('1234'));
console.log(myFunction('gedcba'));

// 11. - Write a function that takes two numbers (a and b) as argument. 
//     - Return b percent of a
function myFunction( a, b) {
    return a * b / 100;
}
console.log(myFunction(100,50));
console.log(myFunction(10, 1));
console.log(myFunction(500, 25));

// 12. - Write a function that takes 6 values (a,b,c,d,e,f) as arguments. 
//     - Sum a and b. Then substract by c. 
//     - Then multiply by d and divide by e. 
//     - Finally raise to the power of f and return the result. Hint: mind the order.
function myFunction(a, b, c, d, e, f) {
    return ((a + b - c) * d / e) ** f;
}
console.log(myFunction(6,5,4,3,2,1));
console.log(myFunction(6,2,1,4,2,3));
console.log(myFunction(2,3,6,4,2,3));

// 13. - Write a function that takes two strings (a and b) as arguments. 
//     - If a contains b, append b to the beginning of a. 
//     - If not, append it to the end. Return the concatenation
function myFunction(a, b) {
    return a.includes(b) ? b + a : a + b;
}
console.log(myFunction('cheese', 'cake'));
console.log(myFunction('lips', 's'));
console.log(myFunction('java', 'script'));
console.log(myFunction(' think, therefore I am', 'I'));

// 14. - Write a function that takes a number as argument. 
//     - If the number is even, return true. 
//     - Otherwise, return false
function myFunction(a) {
    return !(a % 2);
}
console.log(myFunction(10));
console.log(myFunction(-4));
console.log(myFunction(5));
console.log(myFunction(-111));

// 15. - Write a function that takes two strings (a and b) as arguments. 
//     - Return the number of times a occurs in b.
function myFunction(a, b) {
    return b.split(a).length - 1;
  }
console.log(myFunction('m', 'how many times does the character occur in this sentence?'));
console.log(myFunction('h', 'how many times does the character occur in this sentence?'));
console.log(myFunction('?', 'how many times does the character occur in this sentence?'));
console.log(myFunction('z', 'how many times does the character occur in this sentence?'));

// 16. - Write a function that takes a number (a) as argument. 
//     - If a is a whole number (has no decimal place), return true. 
//     - Otherwise, return false.
function myFunction(a) {
    return a - Math.floor(a) === 0;
}
console.log(myFunction(4));
console.log(myFunction(1.123));
console.log(myFunction(1048));
console.log(myFunction(10.48));

// 17. - Write a function that takes two numbers (a and b) as arguments. 
//     - If a is smaller than b, divide a by b. 
//     - Otherwise, multiply both numbers. 
//     - Return the resulting value
function myFunction(a, b) {
    return a < b ? a / b : a * b;
}
console.log(myFunction(10, 100));
console.log(myFunction(90, 45));
console.log(myFunction(8, 20));
console.log(myFunction(2, 0.5));

// 18. - Write a function that takes a number (a) as argument. 
//     - Round a to the 2nd digit after the decimal point. Return the rounded number
function myFunction(a) {
    return Number(a.toFixed(2));
  }
console.log(myFunction(2.12397));
console.log(myFunction(3.136));
console.log(myFunction(1.12397));
console.log(myFunction(26.1379));

// 19. - Write a function that takes a number (a) as argument. 
//     - Split a into its individual digits and return them in an array. 
//     - Hint: you might want to change the type of the number for the splitting
function myFunction(a) {
   //return [...a+''].map(v => +v);
   const string = a + '';
   const strings = string.split('');
   return strings.map(digit => Number(digit))
}
console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));

//------------------------------------------------------------------ARRAY----------------------------------------------------------------------
// 1. - Write a function that takes an array (a) and a value (n) as argument. 
//    - Return the nth element of 'a'
function myFunction(a, n) {
    return a[n - 1];
  }
console.log(myFunction([1,2,3,4,5],3));
console.log(myFunction([10,9,8,7,6],5));
console.log(myFunction([7,2,1,6,3],1));

// 2. - Write a function that takes an array (a) as argument. 
//    - Remove the first 3 elements of 'a'. Return the resul
function myFunction(a) {
    return a.slice(3);
}
console.log(myFunction([1,2,3,4]));
console.log(myFunction([5,4,3,2,1,0]));
console.log(myFunction([99,1,1]));

// 3. - Write a function that takes an array (a) as argument. 
//    - Extract the last 3 elements of 'a'. Return the resulting array
function myFunction(a) {
    return a.slice(-3);
}
console.log(myFunction([1,2,3,4]));
console.log(myFunction([5,4,3,2,1,0]));
console.log(myFunction([99,1,1]));

// 4. - Write a function that takes an array (a) as argument. 
//    - Extract the first 3 elements of a. Return the resulting array
function myFunction(a) {
    return a.slice(0, 3);
}
console.log(myFunction([1,2,3,4]));
console.log(myFunction([5,4,3,2,1,0]));
console.log(myFunction([99,1,1]));

//5. - Write a function that takes an array (a) and a number (n) as arguments. 
//   - It should return the last n elements of a.
function myFunction(a, n) {
    return a.slice(-n);
}
console.log(myFunction([1,2,3,4, 5], 2));
console.log(myFunction([1, 2, 3], 6));
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3));

// 6. - Write a function that takes an array (a) and a value (b) as argument. 
//    - The function should remove all elements equal to 'b' from the array. 
//    - Return the filtered array.
function myFunction(a, b) {
    return a.filter(a => a !== b)
}
console.log(myFunction([1, 2, 3], 2));
console.log(myFunction([1, 2, '2'], '2'));
console.log(myFunction([false, '2', 1], false));
console.log(myFunction([1, 2, '2', 1], 1));

// 7. - Write a function that takes an array (a) as argument. 
//    - Return the number of elements in a.
function myFunction(a) {
    return a.length;
}
console.log(myFunction([1,2,2,4]));
console.log(myFunction([9,9,9]));
console.log(myFunction([4,3,2,1,0]));

// 8. - Write a function that takes an array of numbers as argument. 
//    - Return the number of negative values in the array.
function myFunction(a) {
    return a.filter(num => num < 0).length;
}
console.log(myFunction([1,-2,2,-4]));
console.log(myFunction([0,9,1]));
console.log(myFunction([4,-3,2,1,0]));

// 9. - Write a function that takes an array of strings as argument. 
//    - Sort the array elements alphabetically. Return the result.
function myFunction(arr) {
    return arr.sort();
}
console.log(myFunction(['b', 'c', 'd', 'a']));
console.log(myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

// 10. - Write a function that takes an array of numbers as argument. 
//     - It should return an array with the numbers sorted in descending order.
function myFunction(arr) {
    return arr.sort((a, b) => b - a);
}
console.log(myFunction([1,2,3]));
console.log(myFunction([4,3,2,1]));

// 11. - Write a function that takes an array of numbers as argument. 
//     - It should return the sum of the numbers.
function myFunction(a) {
    return a.reduce((acc, cur) => acc + cur, 0);
}
console.log(myFunction([10,100,40]));
console.log(myFunction([10,100,1000,1]));
console.log(myFunction([-50,0,50,200]));

// 12. Return the average of an array of numbers
function myFunction(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
console.log(myFunction([10,100,40]));
console.log(myFunction([10,100,1000]));
console.log(myFunction([-50,0,50,200]));

// 13. - Write a function that takes an array of strings as argument. 
//     - Return the longest string.
function myFunction(arr) {
    // return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
    return arr.reduce((a, b) => a.length <= b.length ? b : a);
}
console.log(myFunction(['help', 'me']));
console.log(myFunction(['i', 'need', 'candy']));

// 14. - Write a function that takes an array as argument. 
//     - It should return true if all elements in the array are equal. 
//     - It should return false otherwise.
function myFunction(arr) {
    return new Set(arr).size === 1;
}
console.log(myFunction([true, true, true, true]));
console.log(myFunction(['test', 'test', 'test']));
console.log(myFunction([1,1,1,2]));
console.log(myFunction(['10',10,10,10]));

// 15. . Write a function that takes arguments an arbitrary number of arrays. 
//     - It should return an array containing the values of all arrays.
function myFunction(arrays) {
    return arrays.flat();
}
console.log(myFunction(([1, 2, 3], [4, 5, 6])));
console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]));
console.log(myFunction([true, true], [1, 2], ['a', 'b']));

// 16. - Write a function that takes an array of objects as argument. 
//     - Sort the array by property b in ascending order. 
//     - Return the sorted array
function myFunction(arr) {
    const sort = (x, y) => x.b - y.b;
    return arr.sort(sort);
}
console.log(myFunction([{a:1,b:2},{a:5,b:4}]));
console.log(myFunction([{a:2,b:10},{a:5,b:4}]));
console.log(myFunction([{a:1,b:7},{a:2,b:1}]));

// 17. - Write a function that takes two arrays as arguments. 
//     - Merge both arrays and remove duplicate values. 
//     - Sort the merge result in ascending order. 
//     - Return the resulting array
function myFunction(a,b) {
    return [new Set([a, b])].sort((a, b) => a - b);
}
console.log(myFunction([{a:1,b:2},{a:5,b:4}]));
console.log(myFunction([{a:2,b:10},{a:5,b:4}]));
console.log(myFunction([{a:1,b:7},{a:2,b:1}]));

//-----------------------------------------------------------------OBJECT---------------------------------------------------------------------

//1. - Write a function that takes an object with two properties as argument. 
//   - It should return the value of the property with key country.
function myFunction(obj) {
    return obj.country
}
console.log(myFunction({ continent: 'Asia', country: 'Japan' }));
console.log(myFunction({ country: 'Sweden', continent: 'Europe' }));

// 2. Write a function that takes an object with two properties as argument. It should return the value of the property with key 'prop-2'. Hint: you might want to use the square brackets property accessor
function myFunction(obj) {
    return obj['prop-2']
}
console.log(myFunction({  one: 1,  'prop-2': 2}));
console.log(myFunction({  'prop-2': 'two',  prop: 'test'}));

// 3. Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string
function myFunction(obj, key) {
    return obj[key]
}
console.log(myFunction({ continent: 'Asia', country: 'Japan' }, 'continent'));
console.log(myFunction({ country: 'Sweden', continent: 'Europe' }, 'country'));

// 4. Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b'. Return false otherwise. Hint: test case 3 is a bit tricky because the value of property 'z' is undefined. But the property itself exists.
function myFunction(a, b) {
    return b in a;
}
console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction(({x:'a',y:'b',z:'c'},'a')));
console.log(myFunction(({x:'a',y:'b',z:undefined},'z')));

// 5. Write a function that takes an object (a) and a string (b) as argument. Return true if the object has a property with key 'b', but only if it has a truthy value. In other words, it should not be null or undefined or false. Return false otherwise.
function myFunction(a, b) {
    return Boolean(a[b]);
 }
console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction(({x:'a',y:null,z:'c'},'y')));
console.log(myFunction(({x:'a',b:'b',z:undefined},'z')));

// 6. Write a function that takes a string as argument. Create an object that has a property with key 'key' and a value equal to the string. Return the object.
function myFunction(a) {
    return { key: a }
}
console.log(myFunction('a'));
console.log(myFunction('z'));
console.log(myFunction('b'));

// 7. Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.
function myFunction(a,b) {
    return { [a]: b }
}
console.log(myFunction('a','b'));
console.log(myFunction('z','x'));
console.log(myFunction('b','w'));

// 8. Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.
function myFunction(a,b) {
    return Object.fromEntries(a.map((v, index) => [v, b[index]]))
}
console.log(myFunction(['a','b','c'],[1,2,3]));
console.log(myFunction(['w','x','y','z'],[10,9,5,2]));
console.log(myFunction([1,'b'],['a',2]));

// 9. Write a function that takes an object (a) as argument. Return an array with all object keys.
function myFunction(a) {
    return Object.keys(a)
}
console.log(myFunction({a:1,b:2,c:3}));
console.log(myFunction({j:9,i:2,x:3,z:4}));
console.log(myFunction({w:15,x:22,y:13}));

// 10. Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property 'b' of object 'a' inside the original object if it exists. If not, return undefined
function myFunction(obj) {
    return obj?.a?.b
}
console.log(myFunction({a:1}));
console.log(myFunction({a:{b:{c:3}}}));
console.log(myFunction({b:{a:1}}));
console.log(myFunction({a:{b:2}}));

// 11. Write a function that takes an object (a) as argument. Return the sum of all object values.
function myFunction(a) {
    return Object.values(a).reduce((total, cv) => total + cv, 0)
}                                // total = sum || cv = cur
console.log(myFunction({a:1,b:2,c:3}));
console.log(myFunction({j:9,i:2,x:3,z:4}));
console.log(myFunction({w:15,x:22,y:13}));

// 12.Write a function that takes an object as argument. It should return an object with all original object properties. except for the property with key 'b'
function myFunction(obj) {
    const { country, ...newObj } = obj;
    return newObj;
}
console.log(myFunction({ a: 1, b: 7, c: 3 }));
console.log(myFunction({ b: 0, a: 7, d: 8 }));
console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 }));

// 13. Write a function that takes two objects as arguments. Unfortunately, the property 'b' in the second object has the wrong key. It should be named 'd' instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'
function myFunction(x, y) {
    const { country, ...resty } = y;
    return {...x, ...resty, city: country}
}
console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

// 14. Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.
function myFunction(a, b) {
    return Object.entries(a).reduce((pv, cv) =>
      ({...pv, [cv[0]]: cv[1] * b}), {});
}
console.log(myFunction({a:1,b:2,c:3},3));
console.log(myFunction({j:9,i:2,x:3,z:4},10));
console.log(myFunction(({w:15,x:22,y:13},6)));
