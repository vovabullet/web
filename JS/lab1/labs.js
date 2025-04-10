// Задача 1
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

// Задача 2
function task2(number, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let rounded = number.toFixed(precision);
    return parseFloat(rounded);
}

console.log(task2(3.1415926535897932384626433832795,2));
console.log(task2(10.5,3));

// Задача 3
function task3(number, precision) {
    if (number % 10 === 0) {
        return "Число делится на 10";
    } else if (number % 7 === 0) {
        return "Число делится на 7";
    } else if (number % 6 === 0) {
        return "Число делится на 6";
    } else if (number % 3 === 0) {
        return "Число делится на 3";
    } else if (number % 2 === 0) {
        return "Число делится на 2";
    } else {
        return "Не делится";
    }
}

console.log(task3(30));
console.log(task3(15));
console.log(task3(12));
console.log(task3(1643));

// Задача 4
function task4(count, type, day) {
    const prices = {
        Friday: {
            Students: 8.45,
            Corporate: 10.90,
            Regular: 15.00,
        },
        Saturday: {
            Students: 9.80,
            Corporate: 15.60,
            Regular: 20.00,
        },
        Sunday: {
            Students: 10.46,
            Corporate: 16.00,
            Regular: 22.50,
        },
    };

    const basePrice = prices[day][type];
    let totalCost = basePrice * count;

    if (type === "Students") {
        if (count >= 30) {
            totalCost *= 0.85;
        }
    } else if (type === "Corporate") {
        if (count >= 100) {
            totalCost -= basePrice * 10;
        }
    } else if (type === "Regular") {
        if (count >= 10 && count <= 20) {
            totalCost *= 0.95;
        }
    }

    return `Total price: ${totalCost.toFixed(2)}`;
}

console.log(task4(30,"Students","Sunday"));
console.log(task4(40,"Regular","Saturday"));

// Задача 5
function task5(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `yes`;
    } else {
        return `no`;
    }
}

console.log(task5(1984));
console.log(task5(2003));
console.log(task5(4));

