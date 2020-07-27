const nums = [1, 2, 3, 4, 5];

nums.map((num) => num * 2); // [2,4,6,8,10]

nums.filter((num) => num % 2 === 0); // [2,4]

nums.find((num) => num % 2 === 0); // 2

nums.includes(4); // true
nums.includes(7); // false

nums.every((num) => num < 3); // false
nums.some((num) => num < 3); // true