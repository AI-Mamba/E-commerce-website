const bar = document.getElementById('nav-menu');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('nav-active')
    })
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('nav-active')
    })
}
document.addEventListener('click' , (event) => {;
    if(!event.target.closest(".header") && !event.target.closest(".navbar")){
        nav.classList.remove('nav-active');
    }
})

const shopRedirect = document.getElementById('shop-redirect');

console.log(shopRedirect)

if(shopRedirect){
    shopRedirect.addEventListener('click', () => {
        window.location.href = 'sproduct.html'
    })
}



let mainImg = document.querySelector('.Main-img');
let smallImg = document.querySelectorAll('.small-img');

smallImg[0].addEventListener('click', () => {
    mainImg.src = smallImg[0].src;
})
smallImg[1].addEventListener('click', () => {
    mainImg.src = smallImg[1].src;
})
smallImg[2].addEventListener('click', () => {
    mainImg.src = smallImg[2].src;
})
smallImg[3].addEventListener('click', () => {
    mainImg.src = smallImg[3].src;
})
