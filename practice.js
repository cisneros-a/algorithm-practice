// // =============TWOSUM FUNCTION==========================================
// arr = [2, 3, 7, 11, 15, 21, 22, 27];

// let twoSum = (arr, total) => {
//   for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//           if (arr[i] + arr[j] === total) {
//             return  [i, j]
//           }
//           console.log(' algo1 loops')
//       }
//   }
// }

// let twoSum2 = (arr, total) => {
//   let numObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (numObj[arr[i]]) {
//       return [numObj[arr[i]], i];
//     } else {
//       console.log("algo2 loops");
//       let diff = total - arr[i];
//       numObj[diff] = i;
//       console.log(numObj);
//     }
//   }
// };

// console.time('algo1')
// for (let i = 1; i < 1000000; i++) {
//     twoSum(arr, 49)
// }
// console.timeEnd('algo1')

// console.time('algo2')
// for (let i = 1; i < 1000000; i++) {
// console.log(twoSum2(arr, 49));
// }
// console.timeEnd('algo2')

// =============TWOSUM FUNCTION==========================================

// ================ Nth Fibonacci===========================================

//  O(n)time and O(n)space
// let getNthFib = n => {
//     let f = [0, 1]
//     if (n === 1) {
//         return 0
//     }
//     for ( let i = 1; i < n; i++) {
//         let fib = f[i] + f[i-1]
//         f.push(fib)
//     }
//     return f[n-1]

// }

//  O(n)time and O(1)space
// let getNthFib2 = n => {
//   const lastTwo = [0, 1]
//   let counter = 3
//   while (counter <= n) {
//       const nextFib = lastTwo[0] + lastTwo[1]
//       lastTwo[0] = lastTwo[1];
//       lastTwo[1] = nextFib
//       counter++
//   }
//   return n > 1 ? lastTwo[1] : lastTwo[0]
// }

// console.time('getNthFib1')
// for (let i = 1; i < 1000000; i++) {
// getNthFib(13)
// }
// console.timeEnd('getNthFib1')

// console.time('getNthFib2')
// for (let i = 1; i < 1000000; i++) {
//   getNthFib(13)
// }
// console.timeEnd('getNthFib2')

// ================ Nth Fibonacci===========================================

// =====================isPalindrome===============================================

// const string = 'racecar'

// const isPalindrome = string => {
//     let left = 0
//     let right = string.length -1
//     while (left < right) {
//         if (string[left] !== string[right]) {
//             return false
//         }

//         left ++
//         right --
//     }
//     return true
// }

// console.time('isPalindrome')
// for (let i = 1; i < 1000000; i++) {
//     isPalindrome(string)
// }
// console.timeEnd('isPalindrome')

// =====================isPalindrome===============================================

// ===============findThreeLargestNumbers==========================================

// numsArray = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

// const findThreeLargestNumbers = array => {
//   const arrayLength = array.length;

//   let sorted = false;
//   let counter = 0;
//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < array.length - 1 - counter; i++) {
//       if (array[i] > array[i + 1]) {
//         sorted = false;
//         swap(i, i + 1, array);
//       }
//     }
//     counter += 1;
//   }
//   return [
//     array[arrayLength - 3],
//     array[arrayLength - 2],
//     array[arrayLength - 1]
//   ];
// };

// function swap(i, j, array) {
//   [array[i], array[j]] = [array[j], array[i]];
// }

// const findThreeLargestNumbers2 = array => {
//   const threeLargest = [null, null, null];
//   for (const num of array) {
//     updateLargest(threeLargest, num);
//   }
//   return threeLargest;
// };

// const updateLargest = (threeLargest, num) => {
//   if (threeLargest[2] === null || num > threeLargest[2]) {
//     shiftAndUpdate(threeLargest, num, 2);
//   } else if (threeLargest[1] === null || num > threeLargest[1]) {
//     shiftAndUpdate(threeLargest, num, 1);
//   } else if (threeLargest[0] === null || num > threeLargest[0]) {
//     shiftAndUpdate(threeLargest, num, 0);
//   }
// };

// const shiftAndUpdate = (array, num, idx) => {
//   for (let i = 0; i <= idx; i++) {
//     if (i === idx) {
//       array[i] = num;
//     } else {
//       array[i] = array[i + 1];
//     }
//   }
// };

// console.time("algo1");
// for (let i = 1; i < 1000000; i++) {
//   findThreeLargestNumbers(numsArray);
// }
// console.timeEnd("algo1");

// console.time("algo2");
// for (let i = 1; i < 1000000; i++) {
//   findThreeLargestNumbers2(numsArray);
// }
// console.timeEnd("algo2");

// ===============findThreeLargestNumbers==========================================

// ====================rotateLeft==================================================

// array = [1, 2, 3, 4, 5];

// function rotateLeft(array, num) {
//   let rotateCount = num % array.length;
//   let x = array.splice(0, array.length - rotateCount);
//   console.log(array.concat(x));
// }

// rotateLeft(array, 1);

// ====================rotateLeft==================================================

// ================ Remove duplicates===========================================
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// let removeDuplicates = nums => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1);
//       let j = i + 1;
//       while (nums[i] === nums[j]) {
//         nums.splice(j, 1);
//       }
//     }
//   }
//   return nums.length;
// };

// console.log(removeDuplicates(nums));

// var removeDuplicates2 = function(nums) {
//   let j = 0;
//   for (let i = 0; i < nums.length; i++) {
//     nums[j] = nums[i];
//     j++;
//     while (nums[i] == nums[i + 1]) {
//       i++;
//     }
//   }
//   return j;
// };
// console.log(nums.length);

// console.time("algo1");
// for (let i = 1; i < 1000000; i++) {
//   removeDuplicates(nums);
// }
// console.timeEnd("algo1");

// console.time("algo2");
// for (let i = 1; i < 1000000; i++) {
//   removeDuplicates2(nums);
// }
// console.timeEnd("algo2");

// ================ Remove duplicates===========================================

// ==============TwoSum================================================

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// nums = [2, 7, 11, 15];

// var twoSum = function(arr, target) {
//   let numObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (numObj[arr[i]]) {
//       return [numObj[arr[i]] - 1, i];
//     } else {
//       let difference = target - arr[i];
//       numObj[difference] = i + 1;
//     }
//   }
// };

// console.log(twoSum(nums, 9));

// ==============TwoSum================================================

//===============RotateArray===========================================

// Input: [1,2,3,4,5,6,7] and k = 3

// let nums = [1, 2, 3, 4, 5, 6, 7];

// var rotateArray1 = function(nums, k) {
//   for (let i = k; i > 0; i--) {
//     const lastDigit = nums.pop();
//     nums.unshift(lastDigit);
//   }
//   return nums;
// };

// var rotateArray2 = function(nums, k) {
//   if (k > nums.length) {
//     k -= nums.length;
//   }
//   if (nums.length < 2) return;
//   const reverseNums = (start, end) => {
//     while (start < end) {
//       const temp = nums[start];
//       nums[start] = nums[end];
//       nums[end] = temp;
//       start++;
//       end--;
//     }
//     console.log("helper reverse function", nums);
//   };
//   reverseNums(0, nums.length - 1);
//   reverseNums(0, k - 1);
//   reverseNums(k, nums.length - 1);
//   return nums;
// };

// rotateArray2(nums, 3);

// const reverseArray = (start, end) => {
//   while (start < end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
//   return arr;
// };

// console.time("algo1");
// for (let i = 1; i < 1000000; i++) {
//   rotateArray1(nums, 3);
// }
// console.timeEnd("algo1");

// console.time("algo2");
// for (let i = 1; i < 1000000; i++) {
//   rotateArray2(nums, 3);
// }
// console.timeEnd("algo2");

//===============RotateArray===========================================

//====================ContainsDuplicate================================

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var containsDuplicate = function(nums) {
//   numsObj = {};
//   for (i in nums) {
//     if (numsObj[nums[i]]) {
//       return true;
//     }
//     numsObj[nums[i]] = 1;
//   }
//   return false;
// };

// var containsDuplicate2 = function(nums) {
//   let set = new Set(nums);
//   if (set.size == nums.length) {
//     return false;
//   }
//   return true;
// };

// console.log(containsDuplicate2(arr));

// console.time("algo1");
// for (let i = 1; i < 1000000; i++) {
//   containsDuplicate(nums);
// }
// console.timeEnd("algo1");

// console.time("algo2");
// for (let i = 1; i < 1000000; i++) {
//   containsDuplicate2(nums);
// }
// console.timeEnd("algo2");

//====================ContainsDuplicate================================

//====================FindSingle=======================================

// let nums = [4, 8, 12, 1, 6, 2, 4, 2, 1, 6, 8];

// var singleNumber1 = function(nums) {
//   numsObj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (numsObj[nums[i]]) {
//       numsObj[nums[i]] += 1;
//     } else {
//       numsObj[nums[i]] = 1;
//     }
//   }
//   for (num in numsObj) {
//     if (numsObj[num] === 1) {
//       return num;
//     }
//   }
// };

// var singleNumber2 = function(nums) {
//   return nums.reduce((a, b) => a ^ b);
// };

// console.time("algo1");
// for (let i = 1; i < 1000000; i++) {
//   singleNumber1(nums);
// }
// console.timeEnd("algo1");

// console.time("algo2");
// for (let i = 1; i < 1000000; i++) {
//   singleNumber1(nums);
// }
// console.timeEnd("algo2");

//====================FindSingle=======================================

// ===================BinarySearch=====================================

// const nums = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];

// function binarySearch(array, target) {
//   let start = 0;
//   let end = array.length - 1;
//   let midPoint = Math.floor(array.length / 2);
//   while (start <= end) {
//     if (array[midPoint] === target) {
//       return midPoint;
//     }
//     if (array[midPoint] < target) {
//       start = midPoint += 1;
//     }
//     if (array[midPoint] > target) {
//       end = midPoint -= 1;
//     }
//   }
//   return -1;
// }

// function binarySearch(array, target) {
//   let start = 0;
//   let end = array.length - 1;
//   let middle = Math.floor(array.length / 2);
//   while (start <= end) {
//     if (array[middle] === target) {
//       return middle;
//     }
//     if (array[middle] > target) {
//       end = middle -= 1;
//     }
//     if (array[middle] < target) {
//       start = middle += 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch(nums, 0));

// ===================BinarySearch=====================================

// ===================BubbleSort=======================================

//Best Case: O(N), when given an already sorted array
//Worst Case: O(N^2), also the average case
// nums = [8, 5, 2, 9, 5, 6, 3];

// function bubbleSort(array) {
//   let sorted = false;
//   let counter = 0;
//   while (!sorted) {
//     sorted = true;
//     for (let i = 0; i < array.length - 1 - counter; i++) {
//       if (array[i] > array[i + 1]) {
//         console.log("triggered");
//         sorted = false;
//         swap(i, i + 1, array);
//       }
//     }
//     counter += 1;
//   }
//   return array;
// }

// function swap(i, j, array) {
//   [array[i], array[j]] = [array[j], array[i]];
// }

// console.log(bubbleSort(nums));
// ===================BubbleSort=======================================

// ===================InsertionSort=======================================

//Best Case: O(N), when given an already sorted array
//Worst Case: O(N^2), also the average case
// nums = [8, 5, 2, 9, 5, 6, 3];

// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     let j = i;
//     while ((j > 0) & (array[j] < array[j - 1])) {
//       console.log(j, j - 1);
//       swap(j, j - 1, array);
//       j -= 1;
//     }
//   }
//   return array;
// }

// function swap(i, j, array) {
//   [array[i], array[j]] = [array[j], array[i]];
//   console.log(`swapping ${array[i]} and ${array[j]}`);
// }
// console.log(insertionSort(nums));

// ===================InsertionSort=======================================

// ===================SelectionSort=======================================

// nums = [8, 5, 2, 9, 5, 6, 3];

// function selectionSort(array) {
//   currentIndex = 0;
//   while (currentIndex < array.length - 1) {
//     let smallestIndex = currentIndex;
//     for (let i = currentIndex + 1; i < array.length; i++) {
//       if (array[smallestIndex] >= array[i]) smallestIndex = i;
//     }
//     swap(currentIndex, smallestIndex, array);
//     currentIndex += 1;
//   }
//   return array;
// }

// const swap = (i, j, array) => {
//   [array[i], array[j]] = [array[j], array[i]];
// };

// console.log(selectionSort(nums));

// ===================SelectionSort=======================================

//====================WordSplit===========================================

// array = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"];

// function wordSplit(array) {
//   let targetWord = array[0];
//   let targetLength = array[0].length;
//   let wordArray = array[1].split(",");
//   let numsArray = wordArray.map(element => {
//     return element.length;
//   });
//   let potentialMatches = [];
//   for (let i = 0; i < numsArray.length; i++) {
//     for (let j = i + 1; j < numsArray.length; j++) {
//       if (numsArray[i] + numsArray[j] === targetLength) {
//         potentialMatches.push([i, j]);
//       }
//     }
//   }
//   for (i in potentialMatches) {
//     if (
//       wordArray[potentialMatches[i][0]].concat(
//         wordArray[potentialMatches[i][1]]
//       ) === targetWord
//     ) {
//       return [
//         wordArray[potentialMatches[i][0]],
//         wordArray[potentialMatches[i][1]]
//       ];
//     }
//     if (
//       wordArray[potentialMatches[i][1]].concat(
//         wordArray[potentialMatches[i][0]]
//       ) === targetWord
//     ) {
//       return [
//         wordArray[potentialMatches[i][1]],
//         wordArray[potentialMatches[i][0]]
//       ];
//     }
//   }
//   return potentialMatches;
// }

// const wordSplit2 = array => {
//   const targetWord = array[0];
//   const wordArray = array[1];
//   for (let i = 1; i < wordArray.length; i++) {
//     let firstHalf = targetWord.slice(0, i);
//     let secondHalf = targetWord.slice(i);
//     if (wordArray.includes(firstHalf && secondHalf)) {
//       return firstHalf + "," + secondHalf;
//     }
//   }
// };

// console.log(wordSplit2(array));

// console.time("algo1");
// for (let i = 1; i < 1000000; i++) {
//   wordSplit(array);
// }
// console.timeEnd("algo1");

// console.time("algo2");
// for (let i = 1; i < 1000000; i++) {
//   wordSplit2(array);
// }
// console.timeEnd("algo2");

//====================WordSplit===========================================

//====================FirstUnique=========================================

// let string = "abaaabaaa";

// const firstUniqChar = string => {
//   let letterObj = {};
//   for (let i = 0; i < string.length; i++) {
//     if (letterObj[string[i]]) {
//       letterObj[string[i]] += 1;
//     } else {
//       letterObj[string[i]] = 1;
//     }
//   }
//   for (letter in letterObj) {
//     if (letterObj[letter] === 1) {
//       for (let i = 0; i < string.length; i++) {
//         if (string[i] === letter) return i;
//       }
//     }
//   }
//   return -1;
// };

// var firstUniqChar2 = function(s) {
//   let obj = { 1: [], 2: [] };
//   for (let i = 0; i < s.length; i++) {
//     if (obj[2].includes(s[i])) {
//       null;
//     } else if (obj[1].includes(s[i])) {
//       obj[1].splice(obj[1].indexOf(s[i]), 1);
//       obj[2] = obj[2].concat([s[i]]);
//     } else {
//       obj[1] = obj[1].concat([s[i]]);
//     }
//   }
//   return s.indexOf(obj[1][0]);
// };

// function firstUniqChar3(string) {
//   for (let i = 0; i < string.length; i++) {
//     if (string.indexOf(string[i]) === string.lastIndexOf(string[i])) return i;
//   }

//   return -1;
// }

// console.time("algo1");
// for (let i = 1; i < 1000000; i++) {
//   firstUniqChar(string);
// }
// console.timeEnd("algo1");

// console.time("algo2");
// for (let i = 1; i < 1000000; i++) {
//   firstUniqChar(string);
// }
// console.timeEnd("algo2");

// console.time("algo3");
// for (let i = 1; i < 1000000; i++) {
//   firstUniqChar3(string);
// }
// console.timeEnd("algo3");

//====================FirstUnique=========================================

//====================CeaserCipherEncryptor===============================

//around 860ms
// const ceaserCipherEncryptor = (string, key) => {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   const stringArray = string.split("");
//   const stringIndexes = [];
//   const newString = [];
//   //   const rotateCount = key % alphabet.length;
//   stringArray.forEach(letter => {
//     for (i = 0; i < alphabet.length; i++) {
//       if (letter === alphabet[i]) {
//         key = key % alphabet.length;
//         if (i + key > alphabet.length - 1) {
//           let num = i + key + 1 - alphabet.length;
//           stringIndexes.push(num - 1);
//         } else {
//           let num = i + key;
//           stringIndexes.push(num);
//         }
//       }
//     }
//   });
//   for (i = 0; i < stringIndexes.length; i++) {
//     newString.push(alphabet[stringIndexes[i]]);
//   }
//   return newString.join("");
// };

// // around 495ms
// const ceaserCipherEncryptor2 = (string, key) => {
//   const newLetters = [];
//   const newKey = key % 26;
//   const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   for (const letter of string) {
//     newLetters.push(getNewLetter(letter, newKey, alphabet));
//   }
//   return newLetters.join("");
// };

// const getNewLetter = (letter, key, alphabet) => {
//   const newLetterCode = alphabet.indexOf(letter) + key;
//   return newLetterCode <= 25
//     ? alphabet[newLetterCode]
//     : alphabet[-1 + (newLetterCode % 25)];
// };

// console.time("algo1");
// for (let i = 1; i < 1000000; i++) {
//   ceaserCipherEncryptor("xyz", 2);
// }
// console.timeEnd("algo1");

// console.time("algo2");
// for (let i = 1; i < 1000000; i++) {
//   ceaserCipherEncryptor2("xyz", 2);
// }
// console.timeEnd("algo2");

//====================CeaserCipherEncryptor===============================

//====================JumpingOnClouds=====================================

// let array = [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0];

// const jumpingOnClouds = c => {
//   let safeJumps = [];
//   for (let i = 0; i < c.length; i++) {
//     if (c[i] == 0) {
//       safeJumps.push(i);
//     }
//   }
//   let counter = 0;
//   let jumpCount = 0;
//   while (counter < safeJumps.length) {
//     if (safeJumps[counter + 2] - safeJumps[counter] === 2) {
//       jumpCount += 1;
//       counter += 2;
//     } else {
//       jumpCount += 1;
//       counter += 1;
//     }
//   }
//   return jumpCount - 1;
// };

// console.time("algo1");
// for (let i = 1; i < 1000000; i++) {
//   jumpingOnClouds(array);
// }
// console.timeEnd("algo1");

//====================JumpingOnClouds=====================================

// ===================LinkedListConstruction==============================

// This is an input class. Do not edit.
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// // Feel free to add new properties and methods to the class.
// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   // O(1) time / O(1) space
//   setHead(node) {
//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//       return;
//     }
//     this.insertBefore(this.head, node);
//   }

//   // O(1) time / O(1) space
//   setTail(node) {
//     if (this.tail === null) {
//       this.setHead(node);
//       return;
//     }
//     this.insertAfter(this.tail, node);
//   }

//   // O(1) time / O(1) space
//   insertBefore(node, nodeToInsert) {
//     if (nodeToInsert === this.head && nodeToInsert === this.tail) {
//       return;
//     }
//     // want to remove node, if it is in our list, we need to remove
//     // it and if it's not, its a no-op.
//     this.remove(nodeToInsert);

//     // we want to now update the bindings for its new adjacent nodes.
//     nodeToInsert.prev = node.prev;

//     // this is because we are passing in the node want to insert it
//     // before so it will just point to it.
//     nodeToInsert.next = node;

//     if (node.prev === null) {
//       this.head = nodeToInsert;
//     } else {
//       node.prev.next = nodeToInsert;
//     }
//     node.prev = nodeToInsert;
//   }

//   // O(1) time / O(1) space
//   insertAfter(node, nodeToInsert) {
//     if (nodeToInsert === this.head && nodeToInsert === this.tail) {
//       return;
//     }
//     this.remove(nodeToInsert);
//     nodeToInsert.prev = node;
//     nodeToInsert.next = node.next;
//     if (node.next === null) {
//       this.tail = nodeToInsert;
//     } else {
//       node.next.prev = nodeToInsert;
//     }
//     node.next = nodeToInsert;
//   }

//   // O(p) time / O(1) space
//   insertAtPosition(position, nodeToInsert) {
//     if (position === 1) {
//       this.setHead(nodeToInsert);
//       return;
//     }
//     node = this.head;
//     let currentPosition = 1;
//     while (node !== null && currentPosition != position) {
//       node = node.next;
//       currentPosition += 1;
//     }
//     if (node !== null) {
//       this.insertBefore(node, nodeToInsert);
//     } else {
//       this.setTail(nodeToInsert);
//     }
//   }

//   // O(N) time / O(1) space
//   // remember that we need to set temporary values to keep track of our nodes
//   // this is becuase multiple nodes can be the same value
//   removeNodesWithValue(value) {
//     let node = this.head;
//     while (node !== null) {
//       // this line is important. You need to set a temporary variable for the node
//       // you are checking or you will lose track of which node you are on
//       // because you will have removed the .next value from node.
//       let nodeToBeRemoved = node;
//       node = node.next;
//       if (nodeToBeRemoved.value === value) {
//         this.remove(nodeToBeRemoved);
//       }
//     }
//   }

//   // O(1) time / O(1) space
//   remove(node) {
//     if (node === this.head) {
//       this.head = this.head.next;
//     }
//     if (node === this.tail) {
//       this.tail = this.tail.prev;
//     }
//     this.updateNodePointers(node);
//   }

//   // O(N) time / O(1) space
//   containsNodeWithValue(value) {
//     let node = this.head;
//     while (node !== null && node.value !== value) {
//       node = node.next;
//     }
//     return node !== null;
//   }

//   // This will update the pointers of the given nodes and
//   // remove pointers of given nodes.
//   // We have to update surrounding nodes before we can
//   // remove the pointers of given node. We also want to
//   // check if this is a head or tail now.
//   // This needs to be in correct order, or you will lose track
//   // of place in linked list.
//   updateNodePointers(node) {
//     //this is checking if node will now become head node
//     if (node.prev !== null) {
//       node.prev.next = node.next;
//     }
//     //this is checking if node will now become tail node
//     if (node.next !== null) {
//       node.next.prev = node.prev;
//     }
//     node.prev = null;
//     node.next = null;
//   }
// }

// ===================LinkedListConstruction==============================

// ===================DiagonalDifference==================================

// arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9]
// ];

// let arr2 = [
//   [-1, 1, -7, -8],
//   [-10, -8, -5, -2],
//   [0, 9, 7, -1],
//   [4, 4, -2, 1]
// ];
// function diagonalDifference(arr) {
//   let firstTotal = 0;
//   let secondTotal = 0;
//   for (let i = 0; i < arr.length; i++) {
//     firstTotal += arr[i][i];
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     let j = arr.length - 1 - i;
//     secondTotal += arr[i][j];
//   }
//   return Math.abs(firstTotal - secondTotal);
// }

// console.log(diagonalDifference(arr2));

// ===================DiagonalDifference==================================

let string =
  "kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuerhhsanpdtmrzibswswzjjbjqytgfewiuu";

function superReducedString(s) {
  let letterObj = {};
  let newString = [];
  for (let i = 0; i < s.length; i++) {
    if (letterObj[s[i]]) {
      letterObj[s[i]] += 1;
    } else {
      letterObj[s[i]] = 1;
    }
  }
  for (const letter in letterObj) {
    if (letterObj[letter] % 2 === 1) {
      newString.push(letter);
    }
  }
  return letterObj;
  if (newString.length > 0) {
    return newString.join("");
  }
  return "Empty String";
}

console.log(superReducedString(string));
