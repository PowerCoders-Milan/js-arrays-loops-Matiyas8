// define your function here

const multiplesOf = (number, limit) => {
    const multiples = [];
    for (let i = 1; i <= limit / number; i++) {
        multiples[i] = number * i;
    }
    return multiples;
}
console.log(multiplesOf(2, 26));