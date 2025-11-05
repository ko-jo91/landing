const navMenuEl = document.querySelector('.nav--menu')
const hamburgerEl = document.querySelector('.hamburger')
const mainEl = document.querySelector('.main')

hamburgerEl.addEventListener('click',()=>{
    navMenuEl.classList.toggle("nav--open")
    hamburgerEl.classList.toggle("hamburger--cross")
})

navMenuEl.addEventListener('click',()=>{
    navMenuEl.classList.remove("nav--open")
    hamburgerEl.classList.remove("hamburger--cross")
})

mainEl.addEventListener('mousemove',()=>{
    navMenuEl.classList.remove("nav--open")  
})