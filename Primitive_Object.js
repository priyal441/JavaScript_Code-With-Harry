// there are 7 primitive data types
// 1.string
// 2.number
// 3.boolean
// 4.null
// 5.undefined
// 6.symbol
// 7.bigint


let a=null;
let b=345;
let c=true;
let d=BigInt("567")+BigInt("2");
let e="Radhe";
let f=Symbol("i am a nice symbol");
let g=undefined;
console.log(a,b,c,d,e,f,g);

//objects in js

//Key Value Pair
// -->keys(String num) name:"priyal";<--value
// -->keys age:20;<--value (datatype)

const item={
  "priyal":true,
  "Radhe":false,
  "himanshu":undefined,
  "chutkii":56
}
console.log(item["chutkii"]);