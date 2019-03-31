// Code your solution here!
function printString(string) {
  console.log(string[0])
  if (string.length === 1) return true
  printString(string.slice(1))
}

function reverseString(string) {
  if (string.length === 1) return string
  return string.slice(-1) + reverseString(string.slice(0, -1))
}

function isPalindrome(string) {
  let result
  let firstChar = string.slice(0, 1)
  let lastChar = string.slice(-1)
  if (string.length === 1 || (string.length === 2 && firstChar === lastChar)) {
    result = true
  } else if (firstChar === lastChar) {
    result = isPalindrome(string.slice(1, -1))
  } else {
    result = false
  }
  return result
}

function addUpTo(array, idx) {
  if (idx === 0) {
    return array[0]
  } else {
    let currentNum = array[0]
    let newIdx = idx - 1
    let newArray = array.slice(1)
    return currentNum + addUpTo(newArray, newIdx)
  }
}

function compareNum(num1, num2) {
  return num1 > num2 ? num1 : num2
}

function maxOf(array) {
  if (array.length === 1) {
    return array [0]
  } else {
    return compareNum(array.pop(), maxOf(array))
  }
}

function includesNumber(array, num) {
  if (array.length === 0) {
    return false
  } else if (array[0] === num) {
    return true
  } else {
    return includesNumber(array.slice(1), num)
  }
}