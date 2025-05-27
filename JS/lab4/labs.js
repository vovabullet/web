console.log('Задача 1');

function min(a,b,c) {
    let min = a;
    if (b < a && b < c) min = b;
    if (c < a && c < b) min = c;
    return min;
}

console.log(min(2,5,3));
console.log(min(600,342,123));
console.log(min(25,21,4));


console.log("Задача 2")

function subtract(a,b,c) {
    return a+b-c;
}
console.log(subtract(23,6,10))
console.log(subtract(1,17,30));
console.log(subtract(42,58,100));


console.log("Задача 3")

function matrix(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row = row + n + " ";
        }
        console.log(row);
    }
}

matrix(3);
matrix(7);
matrix(2);


console.log("Задача 4")

function bar(progress) {
    let bar = "";
    let percents = Math.floor(progress / 10)
    for (let i = 0; i !== percents; i++) {
        bar += '#';
    }
    for (let j = percents; j < 10; j++) {
        bar += '.';
    }
    if (percents === 10) {
        console.log(progress + "% Complete!\n[" + bar + "]")
    } else {
        console.log(progress + "% [" + bar + "]\nStill loading...");
    }
}

bar(30);
bar(50);
bar(100);