
/*// For each //

let nums = [1, 2, 3];
nums.forEach(function(num) {
  console.log(num * 2);
});


// Map //

let nums = [1, 2, 3];
let doubled = nums.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]

// filter //
//Jo elements condition true return karte hain, unka naya array banata hai.//
let nums = [1, 2, 3, 4, 5];
let evens = nums.filter(function(num) {
  return num % 2 === 0;
});
console.log(evens); // [2, 4]


// reduce //

let nums = [1, 2, 3, 4];
let sum = nums.reduce(function(acc, num) {
  return acc + num;
}, 0);  // 0 starting value hai
console.log(sum); // 10*/

/*let fruits=["apple","banana","mango"];

fruits.forEach(function(fruit){
    console.log("i like "+fruit)
})*/


/*let price=[100,250,400];

let gst=price.map(function(prices){
    return prices+(prices*0.18);
});
console.log(gst);*/


/*let expances=[200,5000,150,12000,300];

let fsc=expances.filter(function(expance){
    return expance>1000;
});

console.log(fsc);*/

/*let expances=[200,5000,150,12000,300];

let sum=expances.reduce(function(acc,expance){
    return acc+expance;
},0);// taki array khali bhi ho to bhi error na aye//

console.log(sum);*/
let cart = [
  { item: "Shirt", price: 500 },
  { item: "Shoes", price: 2000 },
  { item: "Cap", price: 150 }
];


let p= cart.map(function(obj){
    return obj.price;
})

console.log(p);

let total=p.reduce(function(acc,pi){
  return acc+pi;
},0);

console.log(total);
