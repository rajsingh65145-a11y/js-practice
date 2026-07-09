/* question 1

const age=[12,14,15,18,19,20];


for(let i=0;i<age.length;i++){
    
    if(age[i]>=18){
        console.log(age[i])
    }
    
}
*/
/*
const amount=500;
const category="food";
if(amount>=1000){
    console.log("high expance "+category)
}

else{
    console.log("Normal expance"+category)
}
*/

/*
let i;
for(i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}*/

/*let expanse=[200,5000,150,12000,300];
let sum=0;
let i=0;
let highcount=0
for(i=0;i<expanse.length;i++){
    sum=sum+expanse[i];
    if(expanse[i]>1000)  // yaha pe jab value 1000 se jyada hogi tab wo high count ban jayega //
    {
        console.log(expanse[i]);
        highcount=highcount+1;
    }
}

console.log( "High expance count"+highcount);
console.log("total sum"+sum)*/

let temp=[22,35,18,40,25];


let i=0;
for(i=0;i<temp.length;i++){
    if(temp[i]>30){
        console.log("Hot Day",temp[i])
    }
    else if(temp[i]>15 && temp[i]<30 ){
        console.log("Pleasent day",temp[i])
    }
    else if(temp[i]<15){
        console.log("Cold day",temp[i])
    }

    else{
        console.log("0 temprature")
    }
}