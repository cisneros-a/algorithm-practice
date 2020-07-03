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

staircase(6);
