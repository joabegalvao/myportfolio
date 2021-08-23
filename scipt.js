
//-------------NAV SCROLL--------------

let nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
});

//-------------SIDE BAR--------------

let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".nav-content")

/*menuBtn.addEventListener("click", (e)=>{
    const menubtn = e.target;
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    navBar.classList.add("active");
});*/

menuBtn.onclick = function(){
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    navBar.classList.add("active");
    console.log('teste');
};
cancelBtn.onclick = function(){
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    navBar.classList.remove("active");
};

/*cancelBtn.addEventListener("click", (e)=>{
    const cancelBtn = e.target;
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    navBar.classList.remove("active");
});*/

//------------SIDE NAV BAR------------


