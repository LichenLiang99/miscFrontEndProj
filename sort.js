const fs = require('fs');

//generate 100 random numbers
const numbersArray = [];
for (let i = 0; i < 100; i++) {
  const randomNum = Math.floor(Math.random() * 100);
    numbersArray.push(randomNum);
}

//write to file
fs.writeFileSync('q1.txt', numbersArray.join(','));

//read from file
const content = fs.readFileSync('q1.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        data.toString();
    }
    });

//convert to Number type and sort
let numbers = content.split(',').map(num => Number(num));
numbers.sort((a, b) => a - b);

//write back to file
fs.writeFileSync('q1.txt', numbers.join(','));
