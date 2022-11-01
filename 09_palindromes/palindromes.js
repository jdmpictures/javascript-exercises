const palindromes = function (str) {
    let  reversedStr = str
    .split("")
    .reverse()
    .join("")
    .replace(/[\W\s]/g, "")
    .toLowerCase()

    let temp = str.replace(/[\W\s]/g, "")
    .toLowerCase();

    console.log(temp)
    console.log(reversedStr)

    if(temp === reversedStr){
        return true;
    } else{
        return false;
    }
    

};

// Do not edit below this line
module.exports = palindromes;
