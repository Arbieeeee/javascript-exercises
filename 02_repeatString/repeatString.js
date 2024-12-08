const repeatString = function (string, word) {
  let newInput = "";

  if (word < 0) {
    return "ERROR";
  }
  for (let i = 1; i <= word; i++) {
    newInput += string;
  }
  return newInput;
};

// Do not edit below this line
module.exports = repeatString;
