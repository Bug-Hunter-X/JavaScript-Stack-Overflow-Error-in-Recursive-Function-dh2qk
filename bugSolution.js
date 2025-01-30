function foo(a, b) {
  while (a < b) {
    a++;
  }
  return a === b;
}

console.log(foo(1, 5)); // This will correctly return true. It will not cause a stack overflow, even if b is significantly larger than a