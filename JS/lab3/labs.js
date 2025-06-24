console.log('Задача 1');

function operation(arr) {
    let sum = 0
    let newArr = []
    let newSum = 0

    for (i = 0; i < arr.length; i++) {
        let num = arr[i]
        sum += num
        if (num % 2 === 0) {
            num += i
            newArr.push(num)
        } else {
            num -= i
            newArr.push(num)
        }
        newSum += num
    }

    console.log(newArr);
    console.log(sum);
    console.log(newSum);
}

operation([5, 15, 23, 56, 35])
operation([-5, 11, 3, 0, 2])


console.log('Задача 2');

function similarElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
            }
        }
    }
}

similarElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
similarElements(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't'])


console.log('Задача 3');

function rotate(arr, rotations) {
    const len = arr.length;
    if (len === 0) return [];
    const actualRotations = rotations % len;
    for (let i = 0; i < actualRotations; i++) {
        let first = arr[0];

        for (let j = 0; j < len - 1; j++) {
            arr[j] = arr[j + 1];
        }

        arr[len - 1] = first;
    }
    return arr;
}

console.log(rotate([51, 47, 32, 61, 21], 2))
console.log(rotate([32, 21, 61, 1], 4))
console.log(rotate([2, 4, 15, 31], 5 ))


console.log('Задача 4')

function checkMatrix(matrix) {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;
    // первая строка
    let targetSum = 0;
    for (let i = 0; i < colCount; i++) {
        targetSum += matrix[0][i];
    }
    // остальные строки
    for (let i = 1; i < rowCount; i++) {
        let rowSum = 0;
        for (let j = 0; j < colCount; j++) {
            rowSum += matrix[i][j];
        }
        if (rowSum !== targetSum) {
            return false;
        }
    }
    // столбцы
    for (let j = 0; j < colCount; j++) {
        let colSum = 0;
        for (let i = 0; i < rowCount; i++) {
            colSum += matrix[i][j];
        }
        if (colSum !== targetSum) {
            return false;
        }
    }
    return true;
}

console.log(checkMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]] ))
console.log(checkMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]] ))
console.log(checkMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]] ))