function foo(a, b) {
  if (a === b) {
    return true;
  } else if (a > b) {
    return false; 
  } else {
    return foo(a + 1, b);
  }
}

console.log(foo(1, 5)); // this will cause a stack overflow error if b is too large because the recursive calls keep adding 1 to a without ever reaching the base case where a === b