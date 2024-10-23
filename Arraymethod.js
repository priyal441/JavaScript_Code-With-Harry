// let num=[23,45,6,7,88]

// //tostring method
// let b=num.toString()//b is now a string
// console.log(b)
// console.log(typeof b)

// //join method
// let c=num.join("_")
// console.log(c)
// console.log(typeof c)

// //pop method
// num.pop()
// console.log(num)

// //push method
// num.push(66)
// console.log(num)

// //shift method
//  let r=num.shift()
// console.log(r,num)

//unshift method
//  let num=[23,45,6,7,88]
// let s=num.unshift(999)
// console.log(s,num) //return new array length

//delete method
// let num=[1,2,3,4,5,6,7,8]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

//concat method
// let a=[3,5,6,7,8,9]
// let b=[8,5,6,8,9,1]
// let c=[4,5,6,7,8,88]
// let newarray=a.concat(b,c)
// console.log(newarray)
// console.log(a,b)

// //sort method
// let compare=(a,b)=>{
//   return b-a
// }
// let a=[3555,5,6898,76,8,559]
// a.sort(compare)
// console.log(a) //alphabetically sort krta h 

//reverse method
// let b=[3,4,5,6,7]
// b.reverse()
// console.log(b)

//splice and slice
 let num=[551,22,3,14,6,7,8,9,339]
//  let deletedvalues=num.splice(2,3,1021,78987,6788,6765)
//  console.log(deletedvalues)

 //slice method

let newnum=num.slice(3,5)
console.log(newnum)