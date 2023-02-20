const arr = [1, 2, 3, 4, 5];

arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]

const doubledArray = arr.map((element) => element * 2);
console.log(doubledArray); // [2, 4, 6, 8, 10]

const filteredArray = arr.filter((element) => element > 3);
console.log(filteredArray); // [4, 5]

const slicedArray = arr.slice(1, 4);
console.log(slicedArray); // [2, 3, 4]

const reversedArray = arr.reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]

const shiftedArray = arr.shift();
console.log(shiftedArray); // 5
console.log(arr); // [4, 3, 2, 1]

const arr = new Array(5).fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

const str = arr.join("-");
console.log(str); // "0-0-0-0-0"
