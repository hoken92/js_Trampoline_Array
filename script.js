// Part One
// ========================================

let counter = 0;

// try {
//   increaseCount();
// } catch (error) {
//   console.log(error + " " + counter);
// }

function increaseCount() {
  console.log(counter);
  counter++;

  increaseCount();
}

// Part Two
// ========================================

// const facto = (n, a = 1) => {
//   if (n === 0) return a;
//   return () => facto(n - 1, n * a);
// };

// const trampoline = (f, ...args) => {
//   let result = f(...args);
//   while (typeof result === "function") {
//     result = result();
//   }
//   return result;
// };

// console.log(trampoline(facto(5)));

const flattenArray = (n, a = 1) => {
  if (n === 0) return a;
  return () => flattenArray(n - 1, (a += n));
};

const trampoline = (f, ...args) => {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
};

function countNestedArrays(arr) {
  return arr.filter((array) => Array.isArray(array)).length;
}
arr_nums = [2, 8, [6], 3, [3, 5], 3, 4, [5, 4]];
const nestedArrayLength = countNestedArrays(arr_nums);

// Part three
// ========================================

const trampoline2 = (f, ...args) => {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  // alert("calcuation is done");
  return result;
};

const textEl = document.querySelector("p");

function listPrimeNums(number, a = 1) {
  if (a === number) return alert("Calculation is done!");

  let primeNumber = true;
  for (let i = 2; i < a; i++)
    if (a % i === 0) {
      primeNumber = false;
    }

  if (primeNumber) {
    textEl.textContent = a;
  }
  return () => setTimeout(listPrimeNums(number, a + 1), 10);
}

trampoline2(listPrimeNums(10000));
