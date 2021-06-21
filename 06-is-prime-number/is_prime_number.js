//* check if a number is prime or not

const isPrime = number => {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

const getPrimes = amount => {
    let primeNumber = []
    for (var i = 1; primeNumber.length < amount; i++) {
        if (isPrime(i)) {
            primeNumber.push(i)
        }

    }
    return primeNumber;
}
console.log(getPrimes(100));