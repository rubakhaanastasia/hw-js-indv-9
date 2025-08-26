//1.
function logItems(array) {
  for (let i = 0; i < array.lenght; i++) {
    console.log(i + 1 + ` - ` + array[i]);
  }
}
logItems("array");

//2.
function calculateEngravingPrice(message, pricePerWord) {
  let word = message.split(` `);
  return word.length * pricePerWord;
}
console.log(calculateEngravingPrice("hello my name is anastasia", 310));

//3.
function findLongestWord(string) {
  const words = string.split(" ");
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("hello my name is anastasia"));

//4.
function formatString(string) {
  return string.length <= 40 ? string : string.slice(0, 40) + "...";
}
console.log(
  formatString(
    "Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок"
  )
);

//5.
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");
}

console.log(checkForSpam("hello my name is anastasia spam"));
//6.
let input;
const numbers = [];
let total = 0;
input = prompt("введіть число");
numbers.push(Number(input));

console.log(numbers);

do {
  input = prompt("введіть число");
  if (input == null) {
    numbers.push(Number(input));
  }
} while (input == null);
console.log(numbers);