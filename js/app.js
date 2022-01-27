const toggleBtn = document.querySelector('.toggle');
const hamBurgermenu = document.querySelector('.hamburger__menu')
const navBar = document.querySelector('.nav__bar')

toggleBtn.addEventListener('click',()=>{
        hamBurgermenu.classList.toggle('open')
        navBar.classList.toggle('slide')
   
    
})
