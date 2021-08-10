let number = Math.floor(Math.random() * 10);
console.log("Random Number to print powers of 2: " + number);
for (let i = 0; i <= number; i++) {
    let val = Math.pow(2, i);
    console.log("2 Power of " + i + " = " + val);
}