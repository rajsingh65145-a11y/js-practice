/*// function declaration //

function greet(name){
   return "hello"+name;
    
}

// function expression //

const greet2=function(name){
    return "hello"+name
};

// arrow function- shorter syntax//

const greet=(name)=>{
    return "hello"+name;
};

// Agar sirf ek line ka return hai, aur bhi short:
const greet = (name) => "Hello " + name;

// Ek hi parameter ho to bracket bhi optional:
const square = num => num * num;


// Callback function //

function processUser(name,callback){
    console.log("proceesing"+name);
    callback();
}

processUser("Harsh",function(){  // process User ek function hai jo upar create hua tha yaha usme value pass Hui hai//
    console.log("Done!");
});*/

//----------------------------------------------------------------------------------------------------//

//Higher Order //
/*
function multiplier(factor){// multiplier me do parameter hai jo ki return karte hai multipication of factor or num//
    return function(num){
        return num*factor;
    };
}

const double=multiplier(2); // double declare kiya hai aur usme multiplier ki factor aur num ki value daal di hai //
console.log(double(5))


//1st question //

function  calculatediscount (price,percent){
   let discountprice= price*percent/100;
   let finalprice=price-discountprice;
   return finalprice;
}
console.log( calculatediscount(1000,10));
*/

//----------------------------------------------------------------------------//

/*
 const calculatediscount =(price,percent)=>{
   let discountprice= price*percent/100;
   let finalprice=price-discountprice;
   return finalprice;
}
console.log( calculatediscount(1000,10));
*/
/*
function processexpance(amount,callback){
    console.log("processing: "+amount)
    callback()
}

processexpance(10000,function(){
    console.log("done");
})

let number=[1,2,3,4,5];

let sqr=number.map((num)=>{
    return num*num;
});

console.log(sqr);*/
/*
function createvalidator(miniamount){
    return function(amount){
        if (amount>=miniamount){
            return true;
        }
        else{
            return false;
        }
    }

};

const isvalidexpanse=createvalidator(100);
console.log(isvalidexpanse(50));
console.log(isvalidexpanse(150));*/


let number=[1,2,3,4,5];

let sqr=number.map(num=>num*num);

console.log(sqr);
