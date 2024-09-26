function flip(array, n) {
    n -= 1;
    for (i = 0; i < n / 2; i++) {
        tmp = array[n-i];
        array[n - i] = array[i];
        array[i] = tmp;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (count = 0; count < array.length; count++) {
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
    for (i = 0; i <= array.length; i++) {
        if (array[hIndex] < array[i]) {
            hIndex = i;
        }
    }
    return hIndex;
}
