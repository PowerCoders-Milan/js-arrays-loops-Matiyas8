// define your function here

const multiplesOf = (number, limit) => {
    const multiples = []
    for (let i = 0; i < limit / number - 1; i++) {
        multiples[i] = number * (i + 1);
    }
    return multiples;
}
console.log(multiplesOf(3, 50));