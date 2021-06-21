// program to generate fibonacci series up to a certain number
const maxNumber = Math.ceil(Math.random() * 200);
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
array = [];
array[0] = n1;
array[1] = n2;
nextTerm = n1 + n2;
array[2] = nextTerm
function getFibonacciSequence(maxNumber) {
    i = 3;
    while (nextTerm <= maxNumber) {
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
        array[i++] = nextTerm;
    }
    return (array);
}


console.log(getFibonacciSequence(maxNumber));
