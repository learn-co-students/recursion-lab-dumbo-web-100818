function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let mySubString = string.substring(1, string.length);
    printString(mySubString);
  } else {
    return true;
  }
}


function reverseString(string) {
  //pizza length: 5
  if (string.length < 2) {
    return string;
  } else {
  return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(string) {
  //anna
  let l = string.length;
  if (l < 2) {
    return true;
  } else if (string[l - 1] === string[0]) {
    return isPalindrome(string.substring(1, l -1))
  } else {
    return false;
  }
}

function addUpTo(arr, idx) {
  //[1,2,3,4,5]
  if (idx === 0) {
    return arr[0]
  } else {
    return arr[idx] + addUpTo(arr, idx - 1);
  }
}

function maxOf(arr) {
  //[1,2,3]
  if (arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

function includesNumber(arr, num) {
  //[1,3,7,8]
  if (!arr.length) {
    return false;
  } else if (arr[0] === num) {
    return true;
    } else {
    return includesNumber(arr.slice(1), num);
    }
}
