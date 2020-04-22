
const myNumbers = [
    2345,
    7564,
    8235,
    1354,
    5023,
    6047
]

const MIN = 1000;
const MAX = 9999;

let newRandomNumber;

function getRandomInt(min, max) {
  
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

function isNotUnique(newRandomNum){

    for(let number of myNumbers){
        if(number === newRandomNum){

            console.log(`Number ${newRandomNum} is not unique`)
            return true;
        }
    }

}

do {
    newRandomNumber = getRandomInt(MIN, MAX);
}while(isNotUnique(newRandomNumber));

myNumbers.push(newRandomNumber)

console.log(myNumbers);


