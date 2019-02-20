// Code your solution here!

function printString(x) {
  console.log(x[0]);

  if (x.length > 1) {
    let subX = x.substring(1, x.length)
    printString(subX)
  } else {
    return true
  }
}

function reverseString(x) {
  if (x.length < 2) {
    return x
  }
  else {
    return reverseString(x.substring(1)) + x[0]
  }
}

function isPalindrome(x) {
  if (x.length < 2) {
    return true
  } else if (x[x.length -1] === x[0]) {
    return isPalindrome(x.substring(1, x.length - 1))
  } else {
    return false
  }
}

function addUpTo(x, index) {
  return index ?  x[index] + addUpTo(x, --index) : x[index]
}

function maxOf(x) {
  if (x.length === 1) {
    return x[0];
  } else {
    return Math.max(x.pop(), maxOf(x));
  }
}

function includesNumber(x, y) {
  if (!x.length) {
    return false
  } else if (x[0] === y) {
    return true
  } else {
    return includesNumber(x.slice(1), y)
  }
}
