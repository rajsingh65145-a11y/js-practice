
/*
let btn = document.getElementById("mybtn");
let msg = document.querySelector(".message");   // modern/flexible way
let allMsgs = document.querySelectorAll(".message"); // multiple elements


// query selector are used mostly and commanly for all selectors like class ,id //


// Content /Syle Change karna //
msg.textContent="hello harsh";
msg.style.color="red";
msg.style.fontsize="20px";


// Events-Kisi action pe ksuch karna//

btn.addEventListener("click",function(){
    console.log("button was clicked");
    
})

// input lena //

let input=document.getElementById("nameinput");
console.log(input.value);


// Naya element create karna aur use add karna //
let newitem=document.createElement("li");
newitem.textContent="newtask";
document.body.appendChild(newitem);*/
/*
let title=document.querySelector("#title");
let btn=document.querySelector("#changeBtn");

btn.addEventListener("click",function(){
    title.textContent="New title";
    
});*/


/*

let para=document.querySelector("#para");
let btn1=document.querySelector("#colorBtn");


btn1.addEventListener("click",function(){
    para.style.color="pink";
})

let input=document.querySelector("#nameBox");
let btn2=document.querySelector("#showBtn");
let pa=document.querySelector("#output");

btn2.addEventListener("click",function(){
    pa.textContent=`hello,${input.value}!`;
});
*/
/*
let count=0;
let pop=document.querySelector("#count");
let btn3=document.querySelector("#incBtn");

btn3.addEventListener("click",function(){
   count=count+1;
   pop.textContent=count;
})
*/
let task=document.querySelector("#taskInput");
let btn4=document.querySelector("#addBtn");
let list=document.querySelector("#taskList");

btn4.addEventListener("click",function(){
    let li=document.createElement("li");
   li.textContent=task.value;
    list.appendChild(li);
    
    
})