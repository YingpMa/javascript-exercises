const fibonacci = function(a) {
    arr = [1, 1]
    for (let i = 1; i < a; i++) {
        arr.push(arr[i] + arr[i - 1]);
    }
    return arr[a - 1]

};

// Do not edit below this line
module.exports = fibonacci;
