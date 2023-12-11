// const prompt = require('prompt-sync');
function fibonacci(n) {
    if (n <= 0) {
        return "Invalid input. Please enter a positive integer.";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the position in the Fibonacci series: ', (position) => {
    const result = fibonacci(parseInt(position));
    console.log(`The Fibonacci value at position ${position} is: ${result}`);
    rl.close();
});