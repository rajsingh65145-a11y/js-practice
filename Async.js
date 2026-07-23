// Synchronus//
console.log("1")
console.log("2")
console.log("3")
console.log("4")


// settimeout           //
console.log("hi");
setTimeout(function(){
    console.log("harsh")
},2000);
console.log("jai bappa ki ")



 // Promises//

let mypromise=new Promise(function(resolve,reject){
    let success=false;
    if(success){
        resolve("datamil gaya");
    }else{
        reject("erroe aa aya ");
    }
    
});

mypromise.then(function(result){
    console.log(result); // agar resolve hua to //
}).catch(function(error){
    console.log(error);  //agar reject hua to//
})



// async await//
function getdata(){
    return new Promise(function(resolve){
        setTimeout(function () {
            resolve("dataa loded")
        },1000); 
    });
}
async function fetchdata(){
    console.log("Loadig....");
    let result=await getdata();//yaha js rukega jabtak promise resolve nhi ho jati //
    console.log(result);
}

fetchdata();

async function fetchData() {
    try {
        let result = await getData();
        console.log(result);
    } catch (error) {
        console.log("Kuch error aaya: " + error);
    }
}


/// question //

console.log("Start");
setTimeout(function() {
    console.log("Middle");
}, 1000);
console.log("End");

let promise=new Promise(function(resolve,reject){
    let checkage=20;
    if(checkage>=18){
        resolve("Eligible")
    }else{
        reject("not eligible")
    }
})

promise.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})

let ppromise=new Promise(function(resolve,reject){
    let checkage=15;
    if(checkage>=18){
        resolve("Eligible")
    }else{
        reject("not eligible")
    }
})

ppromise.then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})

//updated version//


function checkAge(age) {
    return new Promise(function(resolve, reject) {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not eligible");
        }
    });
}

checkAge(20).then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});

checkAge(15).then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.log(error);
});


function getdata(){
    return new Promise(function(resolve){
        setTimeout(function () {
            resolve("dataa loded")
        },1000); 
    });
}
async function fetchdata(){
    console.log("Loadig....");
    let result=await getdata();
    console.log(result);
}

fetchdata();

async function fetchData() {
    try {
        let result = await getData();
        console.log(result);
    } catch (error) {
        console.log("Kuch error aaya: " + error);
    }
};



function reskyoperation(){
    return new Promise(function(resolve,reject){
        let success=false;
        if(success){
            resolve("success!")
        }else{
            reject("something went wrong!")
        }
    })
};

reskyoperation();

async function handleriskey() {
    try{
        let result=await reskyoperation();
        console.log(result);
    }catch(error){
      console.log("error are generated "+error)
    }
}
handleriskey();




function fetchexpance(id){
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve({id:id,amount:500});
            
        },1000);
    })
}

async function getexpance() {
    let expance=await fetchexpance(1)
    console.log(expance.amount) ;
    
}

getexpance();