const removeFromArray = function(...args) {
    const array = args[0]; 
    const newArray = array.filter(val => !args.includes(val))
    console.log(newArray)
    return newArray; 
    }


// Do not edit below this line

module.exports = removeFromArray;
