let symbol = Symbol("Hello")
//    ^?
//The above is a symbol. It is a unique thing that can't be modified

let test = symbol
console.log(typeof test) // symbol
console.log(test) // Symbol(Hello)
console.log(test.description) // Hello

//Let's try to modify the symbol
test.description = "World!!!"
console.log(test.description) // Hello
//The symbol is immutable. It can't be modified.

//They are also unique
let symbol2 = Symbol("Hello")
console.log(symbol === symbol2) // false

// Symbols are used to create unique properties for objects
let obj = {
	[symbol]: "Hello",
}

//We can't access the property with the symbol
console.log(obj[Symbol("Hello")]) //undefined

//But we can access it with the same symbol
console.log(obj[symbol]) // Hello
