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
document.body.appendChild(newitem);