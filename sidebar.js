let menuBar = document.querySelector('#menu-bar');
let crossBar = document.querySelector('#cross-bar');
let sideBar = document.querySelector('.sidebar');
let links = document.getElementsByTagName('link');

menuBar.addEventListener('click', ()=>{
    sideBar.classList.add('active');
    menuBar.style.opacity = '0';
})

crossBar.addEventListener('click', ()=>{
    sideBar.classList.remove('active');
    menuBar.style.opacity = '1';
});