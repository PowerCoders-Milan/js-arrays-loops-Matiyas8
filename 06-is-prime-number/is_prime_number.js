//* check if a number is prime or not

const isPrime = number => {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}


console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(25));
console.log(isPrime(100));


const getPrimes = amount => {
    let primeNumber = []
    for (var i = 1; i <= amount; i++) {
        if (amount % i === 0) {
            primeNumber.push(i)
        }

    }
    return primeNumber;
}
console.log(getPrimes(84));