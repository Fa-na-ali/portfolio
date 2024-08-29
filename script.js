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