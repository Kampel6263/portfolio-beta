let js = 0;
let react = 0;
let redux = 0;
let git = 0;
let ts = 0;
let reactNative = 0;


let speed = 3;

let jsmax = 92;
let reactmax = 76;
let reduxmax = 69;
let gitmax = 88;
let tsmax = 44;
let nativemax = 37;

let skill1 = document.getElementById('skill1');
let skillWidth1 = document.getElementById('skillWidth1');

let skill2 = document.getElementById('skill2');
let skillWidth2 = document.getElementById('skillWidth2');

let skill3 = document.getElementById('skill3');
let skillWidth3 = document.getElementById('skillWidth3');

let skill4 = document.getElementById('skill4');
let skillWidth4 = document.getElementById('skillWidth4');

let skill5 = document.getElementById('skill5');
let skillWidth5 = document.getElementById('skillWidth5');


let skill6 = document.getElementById('skill6');
let skillWidth6 = document.getElementById('skillWidth6');

const fun = () => {
    let interval = setInterval(() => {


            skillWidth1.style.width = jsmax + '%';
            skill1.innerHTML = js + '%';
            if (js < jsmax) {
                js += speed;
            } else {
                js = jsmax;
            }

            skillWidth2.style.width = reactmax + '%';
            skill2.innerHTML = react + '%';
            if (react < reactmax) {
                react += speed;
            } else {
                react = reactmax;
            }

            skillWidth3.style.width = reduxmax + '%';
            skill3.innerHTML = redux + '%';
            if (redux < reduxmax) {
                redux += speed;
            } else {
                redux = reduxmax;
            }

            skillWidth4.style.width = gitmax + '%';
            skill4.innerHTML = git + '%';
            if (git < gitmax) {
                git += speed;
            } else {
                git = gitmax;
            }

            skillWidth5.style.width = tsmax + '%';
            skill5.innerHTML = ts + '%';
            if (ts < tsmax) {
                ts += speed;
            } else {
                ts = tsmax;
            }

            skillWidth6.style.width = nativemax + '%';
            skill6.innerHTML = reactNative + '%';
            if (reactNative < nativemax) {
                reactNative += speed;
            } else {
                reactNative = nativemax;
            }




    }, 40)

    setTimeout(() => {
        clearInterval(interval)
    }, 2000)
}

let i = false;
window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 260) {
        if (i === false) {

            fun();
            let abutMyself = document.getElementById('about__myself');
            abutMyself.style.opacity = '1';

            i = true;
        }
    }
});




