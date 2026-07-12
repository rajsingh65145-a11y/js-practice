// function declaration //

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

processUser("Harsh",function(){
    console.log("Done!");
});