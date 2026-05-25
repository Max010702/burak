// MIT TASK L

function reverseSentence(str: string): string {
  return str
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseSentence("we like coding!")); // "ew ekil !gnidoc"