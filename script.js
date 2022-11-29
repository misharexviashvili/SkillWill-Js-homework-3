// Task 1
const myFunction = (a, b, ...c) => {
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

// Task 2

const user = {
  banks: [
    { name: "Misha" },
    { lastname: "Rekhviashvili" },
    {
      adress: {
        city: "Tbilisi",
      },
    },
  ],
};

const cityFunction = ({ banks: [, , { adress: { city } = {} }] }) => {
  console.log(city);
};

cityFunction(user); //Tbilisi
