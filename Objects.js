// objects basic//



let user ={
    name:"harsh",
    age:20,
    isStudent:true

   

};
user.age=21;
user.city="surat";

console.log(user.name);
console.log(user.age);
console.log(user.city);

// object update/add property//


// Destructruing-object se values nikalne ka shortcut//

let user={name:"harsh",age:20,city:"surat"};

// purana traika //
let name=user.name;
let age=user.age;

//Destructring (shortcut) //
let {name,age}=user;
console.log(name,age);

// Spread operator(...)--Object/array Ko "phaila" dena//

let user={name:"harsh",age:20};
let upadetUser={...user,age:21}; // sab copy bas age overwrite means update hua hai //
console.log(upadetUser);

// Rest Operator (...)--function me multiple arguments collect karna //

function sum(...numbers){
    return numbers.reduce((acc,n)=>acc+n,0);
}

console.log(sum(1,2,3,4))


// parctice question //

let expanse={
    title:'groceries',
    amount:14000,
    category:'home'

    
}

console.log(expanse.amount);


let expanse={
    title:'groceries',
    amount:14000,
    category:'home'

    
}

expanse.amount=30000;
expanse.date="12/3/2026";

console.log(expanse.amount)
console.log(expanse.date)

let product={
    name:'laptop',
    price:50000,
    brand:'Dell'
};
let {name,price}=product;
console.log(`${name} costs ${price}`);

let expance={
    title:'groceries',
    amount:1500,
    category:'food'
};
let updateexpance={...expance,amount:1800};
console.log(expance);
console.log(updateexpance)


function totalexpance(...amounts){
         return amounts.reduce((acc,n)=>acc+n,0);
}

console.log(totalexpance(100,200,300));
console.log(totalexpance(50,50))
console.log(totalexpance(10,20,30,40))

