function sum(n1, n2){
    return (n1 + n2)
};

function sub(num1, num2){
    return (num1 - num2)
};

function squareOperations(a, b){
    return Math.round(Math.pow((a / b), 2));
};

function squareArea(A){
    return Math.round(A**2 - (Math.PI * A**2 / 4));
};

function sumOfDigits(n) {
    let sum = 0;
    while( n > 0 ){
        sum += n % 10;
        n = Math.floor(n/10);
    }
    return sum
};

function vowels(str){
    let arrVowels = ['a', 'e', 'i', 'o', 'u'];
    let res = '';
    for(i = 0; i <= str.length; i++){
        if (arrVowels.includes(str[i]))
            res += str[i];
    } return res
};

function sumOfStr(a, b){
    return String(Number(a) + Number(b));
};

function longestWordArray(arr){
    let longestWord = '';

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longestWord.length) longestWord = arr[i];
    }
    return longestWord;
};

function countNumbers(arr){
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number')
            count++;
    }
    return count;
};

function revercer(n) {
    let num = 0;
    while( n > 0){
        let lastDigit = n % 10;
        n = Math.floor(n / 10);
        num = num * 10 + lastDigit;
    }
    return num;
};

module.exports = {sum, squareOperations, sub, squareArea, sumOfDigits, vowels, sumOfStr, longestWordArray, countNumbers, revercer};
