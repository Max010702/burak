/* Project Standarts:
  - Logging standarts
  - Naming Standarts
        function, method, variable => CAMEL case    goHome
        class => PASCAL                             MemberService
        folder, file => KEBAB
        css => SNAKE                                button
  - Error handling



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
