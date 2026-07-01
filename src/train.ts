// MIT TASK Z

function sumEvens(arr: number[]): number {
  return arr
    .filter((num: number) => num % 2 === 0)
    .reduce((sum: number, num: number) => sum + num, 0);
}
console.log(sumEvens([1, 2, 3])); // 2

// // MIT TASK Y
// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter((item) => arr2.includes(item));
// }

// console.log(findIntersection([1, 2, 3], [3, 2, 0]));

// // MIT TASK X
// function countOccurrences(obj: Record<string, any>, key: string): number {
//   let count = 0;

//   for (const k in obj) {
//     if (k === key) count++;
//     if (typeof obj[k] === "object" && obj[k] !== null) {
//       count += countOccurrences(obj[k], key);
//     }
//   }

//   return count;
// }

// // Test
// const car = {
//   model: "Bugatti",
//   steer: {
//     model: "HANKOOK",
//     size: 30,
//   },
// };

// console.log(countOccurrences(car, "model"));

// // MIT TASK W

// function chunkArray(array: any[], size: number): any[][] {
//   const result: any[][] = [];

//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }

//   return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// // MIT TASK V

// function countChars(str: string): Record<string, number> {
//   return str.split("").reduce(
//     (word, char) => {
//       word[char] = (word[char] || 0) + 1;
//       return word;
//     },
//     {} as Record<string, number>,
//   );
// }

// // Test
// console.log(countChars("hello")); // { h: 1, e: 1, l: 2, o: 1 }

// // MIT TASK U
// function sumOdds(n: number): number {
//   return Math.floor((n + 1) / 2);
// }

// console.log(sumOdds(9));

// // // MIT TASK t
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

// // MIT TASK S

// function missingNumber(nums: number[]): number {
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = nums.reduce((acc, num) => acc + num, 0);
//   return expectedSum - actualSum;
// }

// console.log(missingNumber([3, 0, 1])); // 2

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
