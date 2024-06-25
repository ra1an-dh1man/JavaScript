const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number);
});

const doubled = numbers.map(number => number * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]


const evens = numbers.filter(number => number % 2 === 0);
console.log(evens); // Output: [2, 4]
