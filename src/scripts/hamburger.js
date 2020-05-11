const hamburger = document.querySelector('.hamburger__nav');
const nav = document.querySelector('.nav');
const socials = document.querySelector('.socials');

hamburger.addEventListener('click', function (){
    this.classList.toggle('hamburger__nav--active');
    nav.classList.toggle('nav--active');
    socials.classList.toggle('socials--active');
});