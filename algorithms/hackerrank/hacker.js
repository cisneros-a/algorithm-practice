// function staircase(n) {
//   let spaceCount = n - 1;
//   let symbolCount = 1;
//   while (spaceCount >= 0) {
//     let step = "";
//     for (let i = 0; i < spaceCount; i++) {
//       step += " ";
//     }
//     for (let i = 0; i < symbolCount; i++) {
//       step += "#";
//     }
//     console.log(step);
//     spaceCount--;
//     symbolCount++;
//   }
// }

// staircase(6);

//Mini-Max Sum

// function miniMaxSum(arr) {
//   let total = arr.reduce((acc, val) => {
//     return acc + val;
//   });
//   console.log(total - arr[arr.length - 1], total - arr[0]);
// }

// miniMaxSum([1, 2, 3, 4, 5]);

// Birthday Cake Candles
// function birthdayCakeCandles(ar) {
//   let largestNum = 0;
//   let largestNumCount = 1;
//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] === largestNum) {
//       largestNumCount += 1;
//     }
//     if (ar[i] > largestNum) {
//       largestNum = ar[i];
//       largestNumCount = 1;
//     }
//   }
//   console.log(largestNumCount);
// }

// birthdayCakeCandles([3, 2, 1, 3]);

// Time Conversion

// function timeConversion(s) {
//   let time;
//   let hour = `${s[0]}${s[1]}`;

//   if (s[s.length - 2] === "P") {
//     time = hour === "12" ? "12" : parseInt(hour) + 12;
//   } else {
//     time = hour === "12" ? "00" : hour;
//   }

//   for (let i = 2; i < s.length - 2; i++) {
//     time += `${s[i]}`;
//   }
//   return time;
// }

// let s = "12:40:22AM";
// console.log(timeConversion(s));

// Migratory Birds

// let birds = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

// function migratoryBirds(arr) {
//   let birdsObj = {};
//   let max = 0;
//   let smallest = Number.MAX_SAFE_INTEGER;
//   for (let i = 0; i < arr.length; i++) {
//     if (birdsObj[arr[i]]) {
//       birdsObj[arr[i]] += 1;
//       if (birdsObj[arr[i]] > max) {
//         smallest = arr[i];
//         max = birdsObj[arr[i]];
//       }
//       if (birdsObj[arr[i]] === max) {
//         smallest = arr[i] < smallest ? arr[i] : smallest;
//       }
//     } else {
//       birdsObj[arr[i]] = 1;
//     }
//   }
//   return smallest;
// }

// console.log(migratoryBirds(birds));

// Apples and Oranges ========================

//start of house(s) = 7, end of house(t) = 11
//apple apple tree (a) = 5, orange tree (a) = 15

// let apples = [-2, 2, 1];
// let oranges = [5, -6];

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   let appleCount = 0;
//   let orangeCount = 0;

//   for (let i = 0; i < apples.length; i++) {
//     if (a + apples[i] >= s && a + apples[i] <= t) {
//       appleCount += 1;
//     }
//   }
//   for (let i = 0; i < oranges.length; i++) {
//     if (b + oranges[i] >= s && b + oranges[i] <= t) {
//       orangeCount += 1;
//     }
//   }
//   return `${appleCount}\n${orangeCount}`;
// }

// console.log(countApplesAndOranges(7, 11, 5, 15, apples, oranges));

// function kangaroo(x1, v1, x2, v2) {
//   if (v1 === v2 && x1 !== x2) {
//     return "NO";
//   }

//   let k1Distance = x1;
//   let k2Distance = x2;

//   if (v2 > v1) {
//     let temp = v1;
//     k1Distance = x2;
//     v1 = v2;
//     k2Distance = x1;
//     v2 = temp;
//   }

//   while (k1Distance < k2Distance) {
//     k1Distance += v1;
//     k2Distance += v2;
//     if (k1Distance === k2Distance) {
//       console.log("YES");
//       return;
//     }
//   }
//   console.log("NO");
//   return;
// }

// console.log(kangaroo(43, 2, 70, 2));

//================funWithAnagrams
// str = ["code", "doce", "framer", "ecod", "frame "];

// function funWithAnagrams(arr) {
//   let unique = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     let match = false;
//     unique.push(arr[i]);
//     for (let j = 0; j < arr.length; j++) {
//       if (isAnagram(unique[unique.length - 1], arr[j]) && j !== i) {
//         match = true;
//       }
//     }
//     if (match) {
//       unique.pop();
//     }
//   }
//   return unique.sort();
// }

// function isAnagram(s1, s2) {
//   if (s1.length !== s2.length) return false;
//   let sorted1 = s1.split("").sort();
//   let sorted2 = s2.split("").sort();

//   for (i = 0; i < s1.length; i++) {
//     if (sorted1[i] !== sorted2[i]) return false;
//   }
//   return true;
// }

// console.log(funWithAnagrams(str));

//==========Left Rotation

// let arr = [1, 2, 3, 4, 5];
// // leftRotation(arr, 4) // [5,1,2,3,4]

// function rotateLeft(a, d) {
//   let rotateAt = d > a.length ? d % a.length : a.length - d;
//   console.log(rotateAt);
//   reverse(a, 0, a.length - 1);
//   reverse(a, rotateAt, a.length - 1);
//   reverse(a, 0, rotateAt - 1);
//   return a;
// }

// function reverse(arr, left, right) {
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// }

// console.log(rotateLeft(arr, 10));

// Time solutions===========================
// console.time("algo1");
// for (let i = 1; i < 1000000; i++) {
//   countApplesAndOranges(7, 11, 5, 15, apples, oranges);
// }
// console.timeEnd("algo1");

// console.time('algo2')
// for (let i = 1; i < 1000000; i++) {
// console.log(twoSum2(arr, 49));
// }
// console.timeEnd('algo2')
