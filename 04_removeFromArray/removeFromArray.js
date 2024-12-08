const removeFromArray = function (arr, ...removeElement) {
  let filteredArr = [];
  let isInRemove;

  for (let i = 0; i < arr.length; i++) {
    isInRemove = false;
    for (let j = 0; j < removeElement.length; j++) {
      if (arr[i] === removeElement[j]) {
        isInRemove = true;
        break;
      }
    }
    if (!isInRemove) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
