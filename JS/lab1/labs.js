function task1(age) {
    switch (true) {
        case (age >= 0 && age <= 2):
            return "младенец";
        case (age >= 3 && age <= 13):
            return "ребенок";
        case (age >= 14 && age <= 19):
            return "подросток";
        case (age >= 20 && age <= 65):
            return "взрослый";
        case (age >= 66):
            return "пожилой";
        default:
            return "Некорректный возраст";
    }
}

console.log(task1(20));
console.log(task1(1));
console.log(task1(100));

function task2(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let rounded = number.toFixed(precision);
    return parseFloat(rounded);
}

console.log(task2(3.1415926535897932384626433832795,2));
console.log(task2(10.5,3));