// let hours = (new Date()).getHours();



let checkBox = document.getElementById('check__box');

let styleElem1 = document.head.appendChild(document.createElement("style"));
let styleElem2 = document.head.appendChild(document.createElement("style"));
let styleElem3 = document.head.appendChild(document.createElement("style"));





let redHeaderColor = '#e40033ff'
let headerBackground = redHeaderColor;
let secondHeaderColor = '#142BF5';
let redGradient1 = 'linear-gradient(to left bottom, #ec0000, #b004a8)'
let redGradient2 = 'linear-gradient(to right, #ec0000, #b004a8)'
let blueGradient = 'linear-gradient(90deg,#00c4cc,#7d2ae8)';


// if(hours >= 22 || hours<= 8){
//     blueGradient = 'linear-gradient(90deg,#333,#555)';
//     secondHeaderColor = '#111';
// }

let loadTheme = document.getElementById('load');
let hideTheme = document.getElementById('hide')
let footerTheme = document.getElementById('footer');
let contactMessageTheme = document.getElementById('contact__message');
let backgroundAfterTheme = document.getElementById('background__after');
let homeTheme = document.getElementById('home');
let contactCvTheme = document.getElementById('contact__cv');

window.onload = () => {

    let loadBackground = document.querySelector('#load');
    let hideBackground = document.querySelector('#hide');
    let contactMessage = document.querySelector('#contact__message');
    let contactCv = document.querySelector('#contact__cv');

    loadBackground.onmouseout = (e) => {
        if (checkBox.checked) {
            loadTheme.style.background = blueGradient;

        } else {
            loadTheme.style.background = redGradient2;
        }

    }

    hideBackground.onmouseout = (e) => {
        if (checkBox.checked) {
            hideTheme.style.background = blueGradient;
        } else {
            hideTheme.style.background = redGradient2;
        }
    }

    loadBackground.onmouseover = (e) => {
        loadTheme.style.background = 'none';
    };

    hideBackground.onmouseover = (e) => {
        hideTheme.style.background = 'none';
    };

    contactMessage.onmouseout = (e) => {
        if (checkBox.checked) {
            contactMessageTheme.style.color = secondHeaderColor;
        } else {
            contactMessageTheme.style.color = headerBackground;
        }
    }

    contactMessage.onmouseover = () => {
        contactMessageTheme.style.color = '#fff';
    }

    contactCv.onmouseover = (e) => {
        if (checkBox.checked) {
            contactCvTheme.style.color = secondHeaderColor;
        } else {
            contactCvTheme.style.color = headerBackground;
        }
    }

    contactCv.onmouseout = (e) => {
        contactCvTheme.style.color = '#fff';
    }

}
// }


const isChecked = () => {


    if (checkBox.checked) {
        backgroundAfterTheme.style.background = blueGradient;
        headerBackground = secondHeaderColor;
        contactMessageTheme.style.color = secondHeaderColor;
        loadTheme.style.background = blueGradient;
        hideTheme.style.background = blueGradient;
        footerTheme.style.background = blueGradient;
        backgroundAfterTheme.style.width = '2500px'
        backgroundAfterTheme.style.height = '2500px'

        for (let i = 1; i <= 6; i++) {
            document.getElementById('skillWidth' + i).style.background = blueGradient;
        }

        styleElem1.innerHTML = `.item:after {background: ${blueGradient};}`;
        styleElem2.innerHTML = `#load:after {background: ${blueGradient};}`;
        styleElem3.innerHTML = `#hide:after {background: ${blueGradient};}`;

    } else {
        headerBackground = redHeaderColor;
        contactMessageTheme.style.color = redHeaderColor;
        homeTheme.style.background = redGradient1;
        loadTheme.style.background = redGradient2;
        hideTheme.style.background = redGradient2;
        footerTheme.style.background = redGradient1;
        backgroundAfterTheme.style.width = '0px'
        backgroundAfterTheme.style.height = '0px'

        for (let i = 1; i <= 6; i++) {
            document.getElementById('skillWidth' + i).style.background = redGradient1;
        }

        styleElem1.innerHTML = `.item:after {background: ${redGradient1};}`;
        styleElem2.innerHTML = `#load:after {background: ${redGradient2};}`;
        styleElem3.innerHTML = `#hide:after {background: ${redGradient2};}`;
    }

    if (window.pageYOffset >= 505) {
        fun1();
    } else {
        fun2();
        if (innerWidth <= 700) {
            hideBurger();
        }
    }


}