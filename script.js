// Part One

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

const facto = (n, a = 1) => {
  if (n === 0) return a;
  return () => facto(n - 1, n * a);
};

const trampoline = (f, ...args) => {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
};

console.log(trampoline(facto(5)));

// https://stackoverflow.com/questions/74866829/count-number-of-nested-arrays-recursively
