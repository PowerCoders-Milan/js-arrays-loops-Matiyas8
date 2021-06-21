// function declaration
const nMultiplesOf = (number, limit) => {
    const array = [];
    i = 0;
    while (array.length != limit) {
        i++;
        array.push(number * i);

    } return array;
}

console.log(nMultiplesOf(3, 45))

