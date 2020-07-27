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

// let twoSum = (arr, t) => {
//   let numObj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (numObj[arr[i]]) {
//       return [numObj[arr[i]], i];
//     } else {
//       let diff = t - arr[i];
//       numObj[diff] = i;
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

const isPalindrome = (string) => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

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

// ===================SuperReducerString==================================
// let string =
//   "kagoyzkgfjnyvjewazalxngpdcfahneqoqgiyjgpzobhaghmgzmnwcmeykqzgajlmuerhhsanpdtmrzibswswzjjbjqytgfewiuu";

// function superReducedString(s) {
//   let letterObj = {};
//   let newString = [];
//   for ( i = 0; i < s.length; i++) {
//     if (letterObj[s[i]]) {
//       letterObj[s[i]] += 1;
//     } else {
//       letterObj[s[i]] = 1;
//     }
//   }
//   for (const letter in letterObj) {
//     if (letterObj[letter] % 2 === 1) {
//       newString.push(letter);
//     }
//   }
//   return letterObj;
//   if (newString.length > 0) {
//     return newString.join("");
//   }
//   return "Empty String";
// }

// console.log(superReducedString(string));

// ===================SuperReducerString==================================

// ===================DepthFirstSearch====================================

//Time complexity is O(V+E) becuase we are having to traverse every vertex and edge
//Space complexity worst case is O(V). We can imagine that it is a graph with only
// large branch and V number of calls are getting added to the stack. Aside from that,
// our new array is going to b V number of indicies.

// class Node {
//   constructor(name) {
//     this.name = name;
//     this.children = [];
//   }

//   addChild(name) {
//     this.children.push(new Node(name));
//     return this;
//   }

//   depthFirstSearch(array) {
//     array.push(this.name);
//     for (const child of this.children) {
//       console.log(child);

//       child.depthFirstSearch(array);
//     }

//     return array;
//   }
// }

// let parentNode = new Node("a");
// parentNode
//   .addChild("b")
//   .addChild("c")
//   .addChild("d");
// parentNode.children[0].addChild("e");
// parentNode.children[0].addChild("f");
// parentNode.children[2].addChild("g");
// parentNode.children[2].addChild("h");
// parentNode.children[0].children[1].addChild("i");
// parentNode.children[0].children[1].addChild("j");
// parentNode.children[2].children[0].addChild("k");

// console.log(parentNode.depthFirstSearch([]));

// ===================DepthFirstSearch====================================
// ===LeetCodeEasy====RemoveElement=======================================

// let nums = [0, 1, 2, 2, 3, 0, 4, 2];

// var removeElement = function(nums, val) {
//   let lastValue = nums.length - 1;
//   for (let i = 0; i < lastValue; i++) {
//     if (nums[i] === val) {
//       [nums[i], nums[lastValue]] = [nums[lastValue], nums[i]];
//       lastValue--;
//       i--;
//     }
//   }
//   return nums;
// };

// var removeElement2 = function(nums, val) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== val) {
//       nums[i] = nums[j];
//       i++;
//     }
//     console.log(nums);
//   }
//   return i;
// };

// ===LeetCodeEasy====RemoveElement=======================================

// ===LeetCodeEasy====romanToInt==========================================
// var romanToInt = function(s) {
//   const symbols = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };

//   let total = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (symbols[s[i]] < symbols[s[i + 1]]) {
//       total -= symbols[s[i]];
//     } else {
//       total += symbols[s[i]];
//     }
//   }
//   return total;
// };

// console.log(romanToInt("MMDLXXIII"));
// ===LeetCodeEasy====romanToInt==========================================

// ===LeetCodeEasy====lengthOfLastWord====================================

// let string = "a";
// var lengthOfLastWord = function(s) {
//   if (s.length === 0) {
//     return 0;
//   }
//   const wordArray = s.split(" ");
//   for (let i = wordArray.length - 1; i >= 0; i--)
//     if (wordArray[i] !== "") {
//       return wordArray[i].length;
//     }
//   return 0;
// };

// console.log(lengthOfLastWord(string));
// ===LeetCodeEasy====lengthOfLastWord====================================

// ===LeetCodeEasy====reverseInt==========================================

// int = 1534236469;

// var reverse = function(x) {
//   const str = x.toString();
//   let array = str.split("");
//   let left = 0;
//   let right = array.length - 1;
//   if (x < 0) {
//     left++;
//   }
//   while (left < right) {
//     [array[left], array[right]] = [array[right], array[left]];
//     left++;
//     right--;
//   }
//   console.log(parseInt(array.join("")) < 2147483648);

//   if (
//     (-2147483648 < parseInt(array.join(""))) &
//     (parseInt(array.join("")) < 2147483648)
//   ) {
//     return parseInt(array.join(""));
//   }
//   return 0;
// };

// console.log(reverse(int));

// ===LeetCodeEasy====reverseInt==========================================

// ===LeetCodeEasy====longestCommonPrefix=================================

// array = ["a"];

// var longestCommonPrefix = function(strs) {
//   if (strs.length === 0) {
//     return "";
//   }
//   let matching = true;
//   let counter = 0;
//   while (matching) {
//     for (let i = 0; i < strs.length - 1; i++) {
//       if (strs[i][counter] !== strs[i + 1][counter]) {
//         matching = false;
//       }
//     }
//     if (counter === strs[0].length) {
//       return strs[0];
//     }
//     counter++;
//   }

//   return strs[0].slice(0, counter - 1);
// };

// console.log(longestCommonPrefix(array));
// ===LeetCodeEasy====longestCommonPrefix=================================

// ===LeetCodeMedium====minSubArray=======================================

// nums = [2, 3, 1, 2, 4, 3, 4, 5, 1, 1, 3, 7, 4, 3];

// var minSubArray = function(nums, s) {
//   let result = Number.MAX_VALUE;
//   let left = 0;
//   let current_sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     console.log(i);
//     current_sum += nums[("i", i)];
//     while (current_sum >= s) {
//       result = Math.min(result, i + 1 - left);
//       current_sum -= nums[left];
//       left++;
//     }
//   }
//   if (result !== Number.MAX_VALUE) {
//     return result;
//   }
//   return 0;
// };

// console.log(minSubArray(nums, 7));

// ===LeetCodeMedium====minSubArray=======================================

// ===algoExpertMedium====breadthFirstSearch==============================
// class Node {
//   constructor(name) {
//     this.name = name;
//     this.children = [];
//   }

//   addChild(name) {
//     this.children.push(new Node(name));
//     return this;
//   }

//   breadthFirstSearch(array) {
//     let queue = [this];
//     while (queue.length > 0) {
//       let current = queue.shift();
//       array.push(current.name);
//       for (const child of current.children) {
//         console.log("child loop");
//         queue.push(child);
//       }
//     }
//     return array;
//   }
// }

// let parentNode = new Node("a");
// parentNode
//   .addChild("b")
//   .addChild("c")
//   .addChild("d");
// parentNode.children[0].addChild("e");
// parentNode.children[0].addChild("f");
// parentNode.children[2].addChild("g");
// parentNode.children[2].addChild("h");
// parentNode.children[0].children[1].addChild("i");
// parentNode.children[0].children[1].addChild("j");
// parentNode.children[2].children[0].addChild("k");

// console.log(parentNode.breadthFirstSearch([]));

// ===algoExpertMedium====breadthFirstSearch==============================

// ===LeetCodeEasy====stepsToReduceToZero=================================

// var numberOfSteps = function(num) {
//   let stepCounter = 0;
//   while (num > 0) {
//     if (num % 2 === 0) {
//       num /= 2;
//       stepCounter++;
//     } else {
//       num -= 1;
//       stepCounter++;
//     }
//   }
//   return stepCounter;
// };

// console.log(numberOfSteps(123));

// ===LeetCodeEasy====stepsToReduceToZero=================================

// ===algoExpertMedium====threeNumberSum============================

// let sortedArray = [-8, -6, 1, 2, 3, 5, 6, 12];
// let array = [12, 3, 1, 2, -6, 5, -8, 6];

// function threeNumberSum(array, target) {
//   let sorted = array.sort(function(a, b) {
//     return a - b;
//   });
//   let answersArray = [];
//   for (let i = 0; i < sorted.length; i++) {
//     let left = 0;
//     let right = sorted.length - 1;
//     while (left < right) {
//       if (i === left) {
//         left++;
//       }
//       if (i === right) {
//         right--;
//       }
//       if (target > sorted[left] + sorted[i] + sorted[right]) {
//         left++;
//       }
//       if (target < sorted[left] + sorted[i] + sorted[right]) {
//         right--;
//       }
//       if (target === sorted[left] + sorted[i] + sorted[right]) {
//         answersArray.push([sorted[left], sorted[i], sorted[right]]);
//         left++;
//       }
//     }
//   }
//   return answersArray;
// }

// console.log(threeNumberSum(array, 0));

// ===algoExpertMedium====threeNumberSum==============================

// ===LeetCodeEasy====minAbsoluteDifference=================================

// arr = [3, 8, -10, 23, 19, -4, -14, 27];

// var minimumAbsDifference = function(arr) {
//   let min = Number.MAX_VALUE;
//   let answerArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (Math.abs(arr[j] - arr[i]) === min) {
//         answerArray.push([arr[i], arr[j]]);
//       }
//       if (Math.abs(arr[j] - arr[i]) < min) {
//         min = Math.abs(arr[j] - arr[i]);
//         console.log(`new new min`);
//         answerArray = [[arr[i], arr[j]]];
//       }
//     }
//   }
//   for (i = 0; i < answerArray.length; i++) {
//     if (answerArray[i][0] > answerArray[i][1]) {
//       [answerArray[i][0], answerArray[i][1]] = [
//         answerArray[i][1],
//         answerArray[i][0]
//       ];
//     }
//   }
//   for (i = 0; i < answerArray.length - 1; i++) {
//     if (answerArray[i][0] > answerArray[i + 1][0]) {
//       [answerArray[i], answerArray[i + 1]] = [
//         answerArray[i + 1],
//         answerArray[i]
//       ];
//     }
//   }
//   return answerArray;
// };

// console.log(minimumAbsDifference(arr));

// ===LeetCodeEasy====minAbsoluteDifference=================================

// ===LeetCodeEasy====reverseString====================================

// let array = ["h", "e", "l", "l", "o"];

// var reverseString = function(s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     [s[left], s[right]] = [s[right], s[left]];
//     left++;
//     right--;
//   }
//   return s;
// };

// console.log(reverseString(array));

// ===LeetCodeEasy====reverseString====================================

// ===LeetCodeEasy====smallerNumsThanCurrent====================================

// nums = [7, 7, 7, 7];

// var smallerNumbersThanCurrent = function (nums) {
//   let answerArray = [];
//   for (let i = 0; i < nums.length; i++) {
//     let largerThanCount = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (j !== i) {
//         if (nums[i] > nums[j]) {
//           largerThanCount++;
//         }
//       }
//     }
//     answerArray.push(largerThanCount);
//   }

//   return answerArray;
// };

// console.log(smallerNumbersThanCurrent(nums));

// var smallerNumbersThanCurrent2 = function (nums) {
//   var sorted = [...nums].sort((a, b) => a - b);
//   console.log(sorted);

//   for (var i = 0; i < nums.length; i++) {
//     nums[i] = sorted.indexOf(nums[i]);
//   }

//   return nums;
// };

// console.log(smallerNumbersThanCurrent2(nums));

// ===LeetCodeEasy====smallerNumsThanCurrent====================================

// const list1 = [1, 4, 7, 8, 1, 4, 5, 2, 12, 13, 2, 1];
// const list2 = [2, 1, 4, 7, 8, 1, 4, 2, 12, 13, 2, 1];
// const subsequence = [1, 4, 2];

// const smallestSub = (list, array) => {
//   let temp = [];
//   let initiated = false;
//   let nextNumInSequence;
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === array[0]) {
//       temp = [i];
//       nextNumInSequence = i + 1;
//       initiated = true;
//     }

//     if (initiated) {
//       if (list[i] === array[nextNumInSequence]) {
//         temp.push(nextNumInSequence);
//       }

//       if (temp.length === array.length - 2) {
//         if (list[i] === array[array.length - 1]) {
//           temp.push(i);
//           return [temp[1] - temp[0] + 1, temp];
//         }
//       }
//     }
//   }
// };

// console.log(smallestSub(list1, subsequence));
// console.log(smallestSub(list2, subsequence));

// ===LeetCodeEasy====smallerNumsThanCurrent====================================

// ===LeetCodeEasy====MaxProfit====================================

// array = [1, 2, 1, 4, 5];

// function stockMarket(prices) {
//   let profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < prices[i + 1]) {
//       console.log("if statement");
//       profit += prices[i + 1] - prices[i];
//     }
//   }

//   return profit;
// }

// console.log(stockMarket(array));

// ===LeetCodeEasy====MaxProfit====================================

//=============TwoQueensProblem====================================

// const board = [
//   [0, 7, 0, 0, 0, 0, 0, 0], //00-07
//   [0, 0, 0, 0, 0, 0, 7, 0], //10-17
//   [0, 0, 0, 0, 0, 0, 0, 0], //20-27
//   [0, 0, 0, 7, 0, 0, 0, 0], //30-37
//   [0, 0, 0, 0, 0, 0, 0, 7], //40-47
//   [0, 0, 7, 0, 0, 0, 0, 0], //50-57
//   [7, 0, 0, 0, 0, 0, 0, 0], //60-67
//   [0, 0, 0, 0, 0, 7, 0, 0], //70-77
// ];

// const isQueenThreated = (board) => {
//   const unsafeSpaces = {};
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       if (board[i][j] === 7) {
//         if (unsafeSpaces[`${i}${j}`]) {
//           return true;
//         }
//         determineUnsafeSpaces(i, j, board, unsafeSpaces);
//       }
//     }
//   }
//   return false;
// };

// const determineUnsafeSpaces = (i, j, board, unsafeSpaces) => {
//   for (let k = j + 1; k < board.length; k++) {
//     unsafeSpaces[`${i}${k}`] = true;
//   }
//   let rightDigit = j + 1;
//   let difference = 2;
//   for (let l = i + 1; l < board.length; l++) {
//     unsafeSpaces[`${l}${j}`] = true;
//     if (rightDigit < board.length) {
//       unsafeSpaces[`${l}${rightDigit}`] = true;

//       rightDigit++;
//     }
// if (l > i && right - difference >= 0) {
//   unsafeSpaces[`${l}${right - difference - 1}`] = true;
//   console.log(`${l}${right - difference}`);
//   difference += 2;
// }
// }
// };

// console.log(isQueenThreated(board));

// console.log('loops')
// for (let j = 0; j < board.length; j++) {
//   if (board[i][j] === 7) {
//     for (let k = j + 1; k < board.length; k++) {
//       console.log(board[i][k])
//       if (board[i][k] === 7) {
//         return true;
//       }
//     }
//   }
// }

//=============TwoQueensProblem====================================

//     let leftIdx = i - 1;
//     let rightIdx = i + 1;
//     let currentPeak = 0;
//     while (leftIdx !== 0 || rightIdx !== array.length - 1) {
//       console.log("while loops");

//       if (leftIdx !== 0) {
//         if (array[leftIdx] <= array[leftIdx + 1]) {
//           leftHigh = array[leftIdx];
//           currentPeak += 1;
//           leftIdx -= 1;
//         } else {
//           leftIdx = 0;
//         }
//       }

//       if (rightIdx !== array.length - 1) {
//         if (array[rightIdx] <= array[rightIdx - 1]) {
//           currentPeak += 1;
//           rightIdx += 1;
//         } else {
//           rightIdx = array.length - 1;
//         }
//       }
//     }
//     if (currentPeak > longestPeak) {
//       longestPeak = currentPeak;
//     }
//   }
//   return longestPeak + 1;
// };

// console.log(longestPeak(array));

// ====algoExpertMedium====longestPeak==============================

// var tribonacci = function (n) {
//   let arr = [1, 1, 2];
//   if (n === 0) return 0;
//   if (n < 4) return arr[n - 1];

//   for (let i = 4; i < n; i++) {
//     if (i % 3 === 1) {
//       arr[0] = reduce(arr);
//     }
//     if (i % 3 === 2) {
//       arr[1] = reduce(arr);
//     }
//     if (i % 3 === 0) {
//       arr[2] = reduce(arr);
//     }
//   }

//   return reduce(arr);
// };

// function reduce(arr) {
//   return arr.reduce((acc, val) => {
//     return acc + val;
//   });
// }

// var tribonacci2 = function (n) {
//   let f0 = 0,
//     f1 = 1,
//     f2 = 1;

//   if (n < 3) {
//     return [f0, f1, f2][n];
//   }

//   let sum = 0;

//   for (let i = 3; i <= n; i++) {
//     sum = f0 + f1 + f2;
//     f0 = f1;
//     f1 = f2;
//     f2 = sum;
//   }

//   return sum;
// };

// console.time("algo2");
// for (let i = 1; i < 1000000; i++) {
//   tribonacci(500);
// }
// console.timeEnd("algo2");

// console.time("algo2");
// for (let i = 1; i < 1000000; i++) {
//   tribonacci2();
// }
// console.timeEnd("algo2");

// ===algoExpertMedium====longestPeak==============================

// array = [1, 2, 3, 4, 5, 1];

// let longestPeak = (array) => {
//   let longestPeak = 1;
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i} loops`);

//     let leftIdx = i - 1;
//     let rightIdx = i + 1;
//     let currentPeak = 0;
//     while (leftIdx !== 0 || rightIdx !== array.length - 1) {
//       console.log("while loops");

//       if (leftIdx !== 0) {
//         if (array[leftIdx] <= array[leftIdx + 1]) {
//           leftHigh = array[leftIdx];
//           currentPeak += 1;
//           leftIdx -= 1;
//         } else {
//           leftIdx = 0;
//         }
//       }

//       if (rightIdx !== array.length - 1) {
//         if (array[rightIdx] <= array[rightIdx - 1]) {
//           currentPeak += 1;
//           rightIdx += 1;
//         } else {
//           rightIdx = array.length - 1;
//         }
//       }
//     }
//     if (currentPeak > longestPeak) {
//       longestPeak = currentPeak;
//     }
//   }
//   return longestPeak + 1;
// };

// console.log(longestPeak(array));

// ====algoExpertMedium====longestPeak==============================

// ====interstion of arrays=========================================

// const inputArr = ["1, 3, 4, 7, 15", "11, 2, 41, 115, 21"];

// function findIntersection(arr) {
//   const [arr1, arr2] = arr.map((arr) => arr.split(","));
//   return arr1.filter((num) => arr2.includes(num));
// }

// console.log(findIntersection(inputArr));

// ====interstion of arrays=========================================

// const moves = [
//   [0, 0],
//   [2, 0],
//   [1, 1],
//   [2, 1],
//   [2, 2],
// ];

// var tictactoe = function (moves) {
//   const board = [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""],
//   ];
//   let x = [];
//   let o = [];
//   for (let i = 0; i < moves.length; i++) {
//     let symbol = i % 2 ? "O" : "X";
//     let placement = moves[i][0] * 3 + moves[i][1] + 1;
//     if (symbol === "X") {
//       x.push(placement);
//     } else {
//       o.push(placement);
//     }
//     // board[placement] = symbol;
//   }
//   checkForWinner(x,o);
// };

// var checkForWinner = function (x,o) {

//   const winningCombos = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
//   ];
//   for (let i = 0; i < x.length; i++) {
//     for ()
//   }

// };

// tictactoe(moves);

// ["X", [], [], [], "X", [], "O", "O", "X"];

//==========longestPalindrome
let s = "abccccdd";

var longestPalindrome = function (s) {
  const letters = {};
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]]) {
      letters[s[i]] += 1;
    } else {
      letters[s[i]] = 1;
    }
  }
  let singleLetter = false;
  let wordCount = 0;

  for (letter in letters) {
    if (letters[letter] === 1) {
      singleLetter = true;
    } else {
      if (letters[letter] % 2 === 1) singleLetter = true;
      let letterCount = Math.floor(letters[letter] / 2);
      wordCount += letterCount * 2;
    }
  }
  if (singleLetter) wordCount += 1;
  return wordCount;
};

var longestPalindrome2 = function (s) {
  let dict = {};
  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    if (dict[sArr[i]] === undefined) {
      dict[sArr[i]] = 1;
    } else {
      dict[sArr[i]] += 1;
    }
  }
  let count = 0;
  let hasOne = 0;
  let keys = Object.keys(dict);
  if (keys.length === 1) {
    return dict[keys[0]];
  }
  for (let i = 0; i < keys.length; i++) {
    if (dict[keys[i]] % 2 === 1) {
      hasOne = 1;
      count += dict[keys[i]] - 1;
    } else if (dict[keys[i]] % 2 === 0) {
      count += dict[keys[i]];
    }
  }
  return count + hasOne;
};

// console.log(longestPalindrome(s));

// console.time("algo1");
// for (let i = 1; i < 1500000; i++) {
//   longestPalindrome(s);
// }
// console.timeEnd("algo1");

// console.time("algo2");
// for (let i = 1; i < 1500000; i++) {
//   longestPalindrome2(s);
// }
// console.timeEnd("algo2");

// const A = "";
// const B = "";
// var rotateString = function (A, B) {
//   if (A.length !== B.length) return false;
//   if (!A) return true;
//   for (let i = 0; i < A.length; i++) {
//     if (B === rotatedString(A, i)) {
//       return true;
//     }
//   }
//   return false;
// };

// function rotatedString(A, num) {
//   let copy = A.split("");
//   let one = reverse(copy, 0, A.length - 1);
//   let two = reverse(one, num, A.length - 1);
//   let three = reverse(two, 0, num - 1);
//   return three.join("");
// }

// function reverse(string, left, right) {
//   while (left < right) {
//     [string[left], string[right]] = [string[right], string[left]];
//     left++;
//     right--;
//   }
//   return string;
// }

// console.log(rotateString(A, B));

// var toHex = function (num) {
//   hexObj = {
//     "10": "A",
//     "11": "B",
//     "12": "C",
//     "13": "D",
//     "14": "E",
//     "15": "F",
//   };
//   if (num < 16) {
//     return returnSingleHex(num);
//   }
//   let firstHex = Math.floor(num / 16);
//   let secondHex = returnSingleHex(num - firstHex * 16);
//   return `${firstHex}${secondHex}`;
// };

// function returnSingleHex(num) {
//   if (num >= 10) return hexObj[num];
//   return num.toString();
// }
