
// CONTACT BUTTON SCROLL

document.querySelector(".contact-btn").addEventListener("click",function(){

document.querySelector(".contact").scrollIntoView({
behavior:"smooth"
})

})


// ORDER BUTTON SCROLL

document.querySelector(".order-btn").addEventListener("click",function(){

document.querySelector(".pricing").scrollIntoView({
behavior:"smooth"
})

})


// FORM VALIDATION

function sendMessage(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let message=document.getElementById("message").value

if(name=="" || email=="" || message==""){
alert("Please fill out all fields.")
return
}

document.getElementById("popup").style.display="flex"

document.getElementById("name").value=""
document.getElementById("email").value=""
document.getElementById("message").value=""

}


function closePopup(){

document.getElementById("popup").style.display="none"

}