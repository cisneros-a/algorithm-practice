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

let birds = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

function migratoryBirds(arr) {
  let birdsObj = {};
  let max = 0;
  let smallest = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (birdsObj[arr[i]]) {
      birdsObj[arr[i]] += 1;
      if (birdsObj[arr[i]] > max) {
        smallest = arr[i];
        max = birdsObj[arr[i]];
      }
      if (birdsObj[arr[i]] === max) {
        smallest = arr[i] < smallest ? arr[i] : smallest;
      }
    } else {
      birdsObj[arr[i]] = 1;
    }
  }
  return smallest;
}

// console.log(migratoryBirds(birds));
