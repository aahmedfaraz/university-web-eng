function findIt(array, target) {
  const pairs = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        pairs.push([array[i], array[j]]);
      }
    }
  }
  console.log("===============================");
  console.log("Given Array  : ", array);
  console.log("Given Target : ", target);
  console.log("Result Pairs : ", pairs);
}

findIt([1, 2, 3, 2], 4);
findIt([1, 2, 3, 2, 1], 3);
