const sumAll = function (first, last) {
  let smaller = 0;
  let larger = 0;
  let result = 0;
  if (
    first >= 0 &&
    Number.isInteger(first) &&
    last >= 0 &&
    Number.isInteger(last)
  ) {
    if (first < last) {
      smaller = first;
      larger = last;
    } else {
      smaller = last;
      larger = first;
    }

    let i = smaller;
    do {
      result += i;
      i++;
    } while (i <= larger);
    return result;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
