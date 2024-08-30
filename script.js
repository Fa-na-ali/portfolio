//navbar scrolling
let nav=document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}


//navbar hiding
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})

//active links
const navlinks = document.querySelectorAll('.nav-link');
navlinks.forEach(navlinkels =>{
    navlinkels.addEventListener('click',()=>{
        document.querySelector('.active')?.classList.remove('active');
        navlinkels.classList.add('active');
    })

})

//form validation

const name= document.getElementById("fname");
const mail= document.getElementById("e-mail");
const subject= document.getElementById("sub");
const msg= document.getElementById("msg");
const form= document.getElementById("submit-form");

const err_name = document.getElementById("not-name");
const err_mail = document.getElementById("not-email");
const err_sub = document.getElementById("not-sub");
const err_msg = document.getElementById("not-msg");

form.addEventListener('submit',(e)=>{

var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(name.value==='' || name.value==null){
e.preventDefault();
err_name.innerHTML = "Name is required";
}else{
    err_name.innerHTML = "";
}

if(!mail.value.match(email_check)){
    e.preventDefault();
err_mail.innerHTML = "Valid email is required";
}else{
    err_mail.innerHTML = "";
}

if(subject.value==='' || subject.value==null){
    e.preventDefault();
    err_sub.innerHTML = "Subject is required";
    }else{
        err_sub.innerHTML = "";
    }

    if(msg.value==='' || msg.value==null){
        e.preventDefault();
        err_msg.innerHTML = "Message is required";
        }
        else{
            err_msg.innerHTML = "";
        }
        if(name.value && mail.value.match(email_check) && subject.value && msg.value){
            alert("Form submitted successfully");
            window.location.reload();
        }
}) 

$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwoZzDH8YFB3x38CuYN2iLEHr7VYm6w9MQDDdIFWnLNrgHR-dZ6ATz5orBlDsHWlrlVKA/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
           // alert("Form submitted successfully")
            //window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})
