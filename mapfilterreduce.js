// let arr=[54,43,88,21]
// let a=arr.map((value,index,array)=>{
//   console.log(value,index,array)
//   return value+index
// })
// console.log(a)

// //filter
// let ar=[45,67,88,99,5]
// let a2=ar.filter((a)=>{
//   return a<10
// })
// console.log(a2)

//reduce method
let arr=[1,2,3,4,5,6,7]
let newarr=arr.reduce((h1,h2)=>{
  return h1+h2
})
console.log(newarr)