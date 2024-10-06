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

const textEl = document.querySelector("p");

function listPrimeNums(number) {
  if (number === 0) return alert("Calculation is finished!");

  let primeNumber = false;
  for (let i = 2; i < number; i++)
    if (number % i !== 0) {
      primeNumber = true;
    }
  textEl.textContent = number;

  return () => setTimeout(listPrimeNums(number - 1), 500);
}

trampoline(listPrimeNums(100));
