const greeting = (word) => {
    return name_p => `${word} ${name_p}!`
}

let hello = greeting("Hello")
let welcome = greeting("Welcome")

console.log(hello("Nath Korat"))
console.log(welcome("Nath Korat"))