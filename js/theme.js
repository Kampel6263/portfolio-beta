let checkBox = document.getElementById('check__box');

let styleElem1 = document.head.appendChild(document.createElement("style"));
let styleElem2 = document.head.appendChild(document.createElement("style"));
let styleElem3 = document.head.appendChild(document.createElement("style"));

let headerBackground = '#e40033ff';
let redGradient1 = 'linear-gradient(to left bottom, #ec0000, #b004a8)'
let redGradient2 = 'linear-gradient(to right, #ec0000, #b004a8)'
let blueGradient = 'linear-gradient(90deg,#00c4cc,#7d2ae8)';

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
            contactMessageTheme.style.color = '#142BF5';
        } else {
            contactMessageTheme.style.color = headerBackground;
        }
    }

    contactMessage.onmouseover = () => {
        contactMessageTheme.style.color = '#fff';
    }

    contactCv.onmouseover = (e) => {
        if (checkBox.checked) {
            contactCvTheme.style.color = '#142BF5';
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
        headerBackground = '#142BF5';
        contactMessageTheme.style.color = '#142BF5';
        loadTheme.style.background = blueGradient;
        hideTheme.style.background = blueGradient;
        footerTheme.style.background = blueGradient;
        backgroundAfterTheme.style.width = '3000px'
        backgroundAfterTheme.style.height = '3000px'

        for (let i = 1; i <= 6; i++) {
            document.getElementById('skillWidth' + i).style.background = blueGradient;
        }

        styleElem1.innerHTML = `.item:after {background: ${blueGradient};}`;
        styleElem2.innerHTML = `#load:after {background: ${blueGradient};}`;
        styleElem3.innerHTML = `#hide:after {background: ${blueGradient};}`;

        let backgroundGradient = setInterval(() => {
            backgroundAfterTheme = document.getElementById('background__after');
            if (backgroundAfterTheme.offsetHeight >= 2800) {
                homeTheme.style.background = blueGradient;
                backgroundAfterTheme.style.opacity = '0';
            }
        }, 20)

        setInterval(() => {
            backgroundAfterTheme = document.getElementById('background__after');
            if (backgroundAfterTheme.offsetHeight === 3000) {
                clearInterval(backgroundGradient)
            }
        })
    } else {
        headerBackground = '#e40033ff';
        contactMessageTheme.style.color = '#e40033ff';
        backgroundAfterTheme.style.opacity = '1';
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