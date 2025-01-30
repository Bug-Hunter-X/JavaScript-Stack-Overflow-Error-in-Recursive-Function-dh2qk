# JavaScript Stack Overflow Bug

This repository demonstrates a common JavaScript bug: stack overflow errors in recursive functions. The `foo` function recursively compares two numbers; however, if the difference between them is too large, it will exceed the call stack limit, resulting in a stack overflow error.  The solution provides a way to mitigate this using iteration instead of recursion.