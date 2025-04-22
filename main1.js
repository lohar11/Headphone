// Header On Scroll Color Change
let header= document.querySelector('header');

window.addEventListener('scroll',() =>{
    header.classList.toggle('shadow',window.scrollY > 0);
});

//menu 
let menu= document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick= () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//remove menu on click any menu link
window.onscroll =() => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//scroll reveal animation
const sr= ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset true
})

sr.reveal('.home-text, .bus-text',{origin: 'left'})
sr.reveal('.home-img , .buds-img',{origin: 'right'})
sr.reveal('.heading',{delay:200})
sr.reveal('.specs-deatils .box',{origin:'left' , interval:200})
sr.reveal('.specs-img',{delay:600})
sr.reveal('.shop-container .box , .footer .logo , .footer .footer-box',{interval:150})