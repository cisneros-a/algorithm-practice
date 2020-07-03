function staircase(n) {
  let spaceCount = n - 1;
  let symbolCount = 1;
  while (spaceCount >= 0) {
    let step = "";
    for (let i = 0; i < spaceCount; i++) {
      step += " ";
    }
    for (let i = 0; i < symbolCount; i++) {
      step += "#";
    }
    console.log(step);
    spaceCount--;
    symbolCount++;
  }
}

// staircase(6);

//Mini-Max Sum

function miniMaxSum(arr) {
  let total = arr.reduce((acc, val) => {
    return acc + val;
  });
  console.log(total - arr[arr.length - 1], total - arr[0]);
}

// miniMaxSum([1, 2, 3, 4, 5]);

// Birthday Cake Candles
function birthdayCakeCandles(ar) {
  let largestNum = 0;
  let largestNumCount = 1;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === largestNum) {
      largestNumCount += 1;
    }
    if (ar[i] > largestNum) {
      largestNum = ar[i];
      largestNumCount = 1;
    }
  }
  console.log(largestNumCount);
}

birthdayCakeCandles([3, 2, 1, 3]);
