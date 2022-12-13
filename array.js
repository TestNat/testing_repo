
const isEven = num => {
    return num % 2 == 0 ? "even" : "odd";
}

let listOfNums = [1,2,3,4,5,6,7,8,9,10]
let classifyNums = []

for(let i of listOfNums){
    classifyNums.push(isEven(i))
}


console.log(listOfNums)
console.log(classifyNums)