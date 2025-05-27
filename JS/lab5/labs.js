// Задание 1
const employeesList = ["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"];

const employeeObject = employeesList.map(employee => {
  return {
    name: employee,
    ID: employee.length
  };
});
employeeObject.forEach(employee => {
  console.log(`Name: ${employee.name} - Personal Number: ${employee.ID}`);
});

// Задание 2
const sityesList = ['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625']

const sityObject = sityesList.map(sity => {
    const splitedSity = sity.split(" | ");
    return {
        town: splitedSity[0],
        latitude: splitedSity[1],
        longitude: splitedSity[2]
    }
})
sityObject.forEach(sity => {console.log(sity)})

// Задача 3
const current = [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ]
const ordered = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]

function processInventory(current, ordered) {
    const inventory = {};
  
    for (let i = 0; i < current.length; i += 2) {
      const product = current[i];
      const quantity = parseInt(current[i + 1], 10);
      if (inventory[product] === undefined) {
        inventory[product] = 0;
      }
      inventory[product] = inventory[product] + quantity;
    }
    for (let i = 0; i < ordered.length; i += 2) {
      const product = ordered[i];
      const quantity = parseInt(ordered[i + 1], 10);
      if (inventory[product] === undefined) {
        inventory[product] = 0;
      }
      inventory[product] = inventory[product] + quantity;
    }
    return inventory;
  }
  
  const inventory = processInventory(current, ordered);
  
  for (const product in inventory) {
    console.log(`${product} -> ${inventory[product]}`);
  }
  
// Задача 4
let movies = [];

function addMovie(movieName) {
  movies.push({name: movieName});
}
function addDirector(movieName, director) {
  const movie = movies.find(m => m.name === movieName);
  if (movie) {
    movie.director = director;
  }
}
function addDate(movieName, date) {
  const movie = movies.find(m => m.name === movieName);
  if (movie) {
    movie.date = date;
  }
}

const commands = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]

commands.forEach(command => {
    const cplitedCommands = command.split(" ")
    if (cplitedCommands[0] == 'addMovie') {
        let movieName = ""
        for (let i = 1; i < cplitedCommands.length; i++) {
            movieName += cplitedCommands[i]
            if (i !== cplitedCommands.length-1) {
                movieName += " "
            }
        }
        addMovie(movieName)
    } else if (command.includes("directedBy")) {
        const commandArr = command.split(" directedBy ")
        addDirector(commandArr[0], commandArr[1])
    } else if (command.includes("onDate")) {
        const commandArr = command.split(" onDate ")
        addDate(commandArr[0], commandArr[1])
    }
})

movies.forEach(movie => {console.log(movie)})
