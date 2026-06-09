// MIT TASK S

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // 2

/*  Validation:
  Frontend validation,
  Backend validation
  Database validation

*/

// // MIT TASK R
// function calculate(expression: string): number {
//   const [a, b] = expression.split("+").map(Number);
//   return a + b;
// }

// // Test
// console.log(calculate("1+2")); // 3
// console.log(calculate("1+3")); // 4

/* 
  Cookies:
  request join
  self destroy

*/

// // MIT TASK Q
// function hasProperty(obj: object, str: string): boolean {
//   return str in obj;
// }

// // Testlar:
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false

// /*
//   Traditional Frontend Development.   =>   BSSR(Adminka)   =>    EJS
//   Modern FD.                          =>   SPA(USER)       =>    REACT
// */

// // MIT TASK P
// function objectToArray(obj: Record<string, number>): [string, number][] {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 })); // [["a", 10], ["b", 20]]

// // MIT TASK O
// function calculateSumOfNumbers(arr: any[]): number {
//   return arr
//     .filter((item): item is number => typeof item === "number")
//     .reduce((sum: number, item: number) => sum + item, 0);
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); // 45

/* Project Standarts:
  - Logging standarts
  - Naming Standarts
        function, method, variable => CAMEL case    goHome
        class => PASCAL                             MemberService
        folder, file => KEBAB
        css => SNAKE                                button
  - Error handling



*/

/* 
  Traditional API
  Rest Api
  GraphQl Api
*/

// // MIT TASK N
// function palindromCheck(str: string): boolean {
//   const reversed: string = str.split("").reverse().join("");
//   return str === reversed;
// }
// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("racecar")); // true
// console.log(palindromCheck("son")); // false

// // MIT TASK M
// function getSquareNumbers(
//   numbers: number[],
// ): { number: number; square: number }[] {
//   return numbers.map((num) => ({
//     number: num,
//     square: num * num,
//   }));
// }

// // TEST
// console.log(getSquareNumbers([1, 2, 3]));
// [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]

// // MIT TASK L

// function reverseSentence(str: string): string {
//   return str
//     .split(" ")
//     .map(word => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("we like coding!")); // "ew ekil !gnidoc"
