// Humburger

const humburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');

humburger.addEventListener('click', function(){
    humburger.classList.toggle('humburger-active')
    navMenu.classList.toggle('hidden')
})

// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header')
    const fixednav = header.offsetTop;

    if(window.pageYOffset > fixednav){
        header.classList.add('navbar-fixed');

    } else{
        header.classList.remove('navbar-fixed')
    }
}

// Fungsi untuk menampilkan alert
function tampilkanAlert() {
    alert("Direkomendasikan untuk menggunakan device mobile (Handphone)!");
}

// Panggil fungsi tampilkanAlert saat halaman dimuat
window.onload = tampilkanAlert;