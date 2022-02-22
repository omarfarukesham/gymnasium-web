// const company = {
//     name: 'GP',
//     ceo: {food: 'pastha', phone: '01775070627', drink: 'coffee'},
//     department:{
//         it:{first:'web', second: 'Digital Marketing'}
//     },
//     address: 'Dhaka, Bangladesh'
// }

// //destructuring 
// const {name, first} = company.department.it
// console.log(first)

// //array destructuring

// const [a,b,c] = [45,60,70,80]
// console.log(c)

// // object chaining
// const company = {
//     name: 'GP',
//     ceo: {food: 'pastha', phone: '01775070627', drink: 'coffee'},
//     department:{
//         it:{first:'web', second: 'Digital Marketing'}
//     },
//     address: 'Dhaka, Bangladesh'
// }

// const {food, drink} = company.ceo// out put done
// console.log(drink)

// //somehow if we miss the property which 
// // is not exist on the object in that time program will take error, to solve this problem object chaning can help us
// console.log(company.department.it.first)
// console.log(company?.department?.backend?.it?.first)


// problem: if we wanna make square of all array elements 
// const numbers = [4,5,6,7,8]

// //first approach  loop
// const newArray = []
// for(const number of numbers){
//     const result = number*2
//    newArray.push(result)
// }

// //second approach function 
// function newArray(number){
//     const output = []
//     for(const number of numbers){
//        output.push(number*2)
//     }
//     return output
// }
// newArray(numbers)


// // third approch and ES6 map() method
// const getResult = numbers.map((x) => x*x)
// console.log(getResult)


// const products = [
//     {name: 'laptop' , price: 2000, color: 'Sliver'},
//     {name: 'Mobile' , price: 300, color: 'Purple'},
//     {name: 'Table' , price: 20, color: 'ashe'},
//     {name: 'light' , price: 10, color: 'white'}
// ]

// // map function return an array
// // const productName = products.map(p=>p.name)
// // const productColor = products.map(p=>p.color)
// // console.log(productColor)

// //forEach loop this loop dose not return anything
// //  products.forEach(element =>console.log(element.price) );

// // const priceLower = products.filter(product => product.price >200)
// // console.log(priceLower)
// // const findCheck = products.find(p => p.color == 'white')
// // console.log(findCheck)

// function min(nums) { 
//     return Math.min(...nums)
//  }
// console.log(min( [1,3,2 ]))

// const {x, y, z} = {x: 1, y1: 2, z: 3};

// console.log(y)

// const nums = [1,2,3,4,5];
// let output = nums.filter(n => n%2);

// console.log(output);
// const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
// console.log(product.price)

const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};
console.log(player.firstName);