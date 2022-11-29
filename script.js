// Task 1
const myFunction = function (a, b, ...c) {
  const myArr = [];
  const firstTwoSum = a + b;
  myArr.push(firstTwoSum);
  let multy = 1;
  if (c.length !== 0) {
    for (element of c) {
      multy = multy * element;
    }
    myArr.push(multy);
  }
  return myArr;
};
