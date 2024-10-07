# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.
```javascript
function pancakeSort(array) {
    for (count = 0; count < array.length; count++) {			// loop executed n times
        n = findLargest(array.slice(0, (array.length - count)));	
        if (n == (array.length - count - 1)) { 
        } else {
            flip(array, n + 1);
            flip(array, array.length - count);
        }
    }
    return array;
}

function findLargest(array) {
    hIndex = 0;
    																	                                                                 n 
    for (i = 0; i <= array.length; i++) {				// loop executed n - number of times loop in pancakeSort function has executed = ∑ 1 + 2 + 3 + ... + n = n(n-1) / 2
    																	                                                                 1
        if (array[hIndex] < array[i]) {					// 1 compare per execution of the loop
            hIndex = i;
        }
    }
    return hIndex;
}
```

T(n) = n x (n+1) / 2

T(n) = (n<sup>2</sup> + n) / 2

T(n) ∈ $\Theta$(n<sup>2</sup>) in terms of number of compares

```javascript
function pancakeSort(array) {
    for (count = 0; count < array.length; count++) {			loop executes n times
        n = findLargest(array.slice(0, (array.length - count)));
        if (n == (array.length - count - 1)) {
        } else {
            flip(array, n + 1);						both flip lines execute every loop unless the next index is already correct, both are worst case executed n times
            flip(array, array.length - count);				
        }
    }
    return array;
}

function flip(array, n) {
    n -= 1;
    for (i = 0; i < n / 2; i++) { 	            // loop executes (n + 1) / 2 times, 1 flip per loop
        tmp = array[n-i]; 
    for (i = 0; i <= array.length; i++) {
        array[n - i] = array[i];
        array[i] = tmp;
    }
    return array;
}
```

T(n) = 2n((n+1) / 2)) = n<sup>2</sup> + n

T(n) ∈ $\Theta$(n<sup>2</sup>) in terms of number of flips
