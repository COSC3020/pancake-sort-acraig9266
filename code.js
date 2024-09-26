function flip(array, n) {
    n -= 1;                            // don't know why but have to lower n by 1 before loop instantiation
    for (i = 0; i < n / 2; i++) {
        tmp = array[n-i];
        array[n - i] = array[i];
        array[i] = tmp;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    return array;
}


//a = [1, 2, 3, 4, 5];
//console.log(flip(a, 5));
