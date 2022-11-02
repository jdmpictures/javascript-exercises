const fibonacci = function(num) {
    let fib = [0, 1];
    if(num < 0){
        return 'OOPS'
    }

    for(i = 2; i <= num; i++){
        fib[i] = fib[i - 2] + fib[i - 1]
        fib.push(fib[i])
    }
    return fib[fib.length - 1]

};

// Do not edit below this line
module.exports = fibonacci;
