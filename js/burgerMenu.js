let nav = document.getElementById('nav');
let logoNav = document.getElementById('logo_nav');

let burgerS = document.getElementById('burgerS');
let burgerH = document.getElementById('burgerH');

let time = 200;


const showBurger = () => {
    logoNav.style.display = 'block';
    if (window.pageYOffset >= 505) {
        header.style.background = 'rgba(228, 0, 51, 1)';
    } else {
        logoNav.style.background = 'rgba(228, 0, 51, 0.95)';
    }
    header.style.padding = '15px 0'
    nav.style.display = 'flex';
    logoNav.style.textAlign = 'center';

    burgerS.style.opacity = '0';
    setTimeout(() => {
        burgerS.style.display = 'none';
    }, time)

    burgerH.style.display = 'block';

    setTimeout(() => {
        burgerH.style.opacity = '1';
    }, time)


}

const hideBurger = () => {

    if (window.pageYOffset >= 505) {
        header.style.background = 'rgba(228, 0, 51, 1)';
        header.style.padding = '0px 0';
    } else {
        if (innerWidth <= 500) {
            header.style.padding = '15px 0';
        } else {
            header.style.padding = '25px 0';
        }
        logoNav.style.background = 'rgba(0, 0, 0, 0)';

    }


    burgerS.style.display = 'block';
    setTimeout(() => {
        burgerS.style.opacity = '1';
    }, time);

    burgerH.style.opacity = '0';
    setTimeout(() => {
        burgerH.style.display = 'none';
    }, time)
    nav.style.display = 'none';
    logoNav.style.textAlign = 'left';
}