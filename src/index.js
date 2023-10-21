module.exports = function toReadable (number) {
  let str = '';
  let dec = '';
  let hundred = '';
  let numbersToNineteen = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let numbersToHundred = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  
  if (number < 20) return numbersToNineteen[number];
  if (number < 100) {
    let a = JSON.stringify(number).split('');
    dec = numbersToHundred[JSON.parse(a[0]) - 2];
    str += `${dec} ${a[1] > 0 ? numbersToNineteen[a[1]] : ''}`;
  }
  if (number >= 100) {
    let a = JSON.stringify(number).split('');
    hundred = `${numbersToNineteen[a[0]]} hundred`;
    dec = numbersToHundred[JSON.parse(a[1]) - 2];
    number % 100 < 20 ? str += `${hundred} ${number % 100 > 0 ? numbersToNineteen[number % 100] : ''}` : str += `${hundred} ${dec ? dec : ''}${numbersToNineteen[a[2]] !== 'zero' ? ' ' + numbersToNineteen[a[2]] : ''}`;
  }

  return str.trim();
};