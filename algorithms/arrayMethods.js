const nums = [1, 2, 3, 4, 5];

nums.map((num) => num * 2); // [2,4,6,8,10]

nums.filter((num) => num % 2 === 0); // [2,4]

nums.find((num) => num % 2 === 0); // 2

nums.includes(4); // true
nums.includes(7); // false

nums.every((num) => num < 3); // false
nums.some((num) => num < 3); // true

const numsToo = [6, 7, 8, 9, 10];

nums.concat(numsToo); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nums.indexOf(3); // 2

nums.reverse(); // [5,4,3,2,1]

nums.join(); // "1,2,3,4,5"
nums.join(""); // "12345"
nums.join(" "); // "1 2 3 4 5"
nums.join("-"); // "1-2-3-4-5"

nestedNums = [[1], [2], [3], [4], [5]];

nestedNums.flat(); // [1,2,3,4,5]

// console.log(nestedNums.flat());

const numsThree = [1, 2, 3, 3, 4, 5];

numsThree.indexOf(3); // 2

numsThree.lastIndexOf(3); // 3
