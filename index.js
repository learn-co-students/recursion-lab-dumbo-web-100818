// Code your solution here!
function printString(myString) {
  console.log(myString[0]);
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0]
  }
}

function isPalindrome(myString) {
  if (myString.length < 2) {
    return true
  } else if (myString[myString.length - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, myString.length - 1))
  }
  else {
    return false
  }
}

function addUpTo(array, index) {
  if (index != 0) {
    return array[index] + addUpTo(array, index -1)
  }
  else {
    return array[index]
  }
}

function maxOf(array) {
  if (array.length === 1){
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, x){
  if (array[0] === x){
    return true
  } else if (!array.length) {
    return false
  }
  else {
    return includesNumber(array.slice(1), x)
  }
}
