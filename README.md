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

function pancakeSort(array) {
    for (count = 0; count < array.length; count++) {			loop executed n times
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
    for (i = 0; i <= array.length; i++) {				loop executed n - number of times loop in pancakeSort function has executed = ∑ 1 + 2 + 3 + ... + n = n(n-1) / 2
    																	     1
        if (array[hIndex] < array[i]) {					1 compare per execution of the loop
            hIndex = i;
        }
    }
    return hIndex;
}

T(n) = n x n(n+1) / 2
T(n) = n x (n<sup>2</sup> + n) / 2
T(n) = n<sup>3</sup> + n<sup>2</sup> / 2
T(n) ∈ $\Theta$(n<sup>3</sup>)

T(n) = $\Theta$(n<sup>2</sup>)
	The loop within the main function runs n times. It calls the flip function twice per loop which has its own loop run n times. Therfore the n
	complexity from each loop is multiplied making it n<sup>2</sup>.
