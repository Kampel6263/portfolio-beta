let header = document.getElementById('header')

let burgerShow = document.getElementById('burgerS');
let burgerHide = document.getElementById('burgerH');

const fun1 = () => {

    header.style.background = "#e40033ff";
    header.style.position = 'fixed';
    header.style.padding = '0px 0';
    header.style.boxShadow = '0px 1px 10px 0px rgba(0,0,0,0.75)'




    burgerShow.style.top = '27px';
    burgerHide.style.top = '27px';



}

const fun2 = () => {
    header.style.background = "none";
    header.style.position = 'absolute';

    burgerShow.style.top = '40px';
    burgerHide.style.top = '40px';

    if(innerWidth <= 500){
        header.style.padding = '15px 0';
    } else {
        header.style.padding = '25px 0';
    }

    header.style.boxShadow = '0px 1px 10px 0px rgba(0,0,0,0)'
}


window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 505) {
        fun1();
    } else {
        fun2();
        if(innerWidth <=700){
            hideBurger();
        }
    }
});


window.addEventListener('scroll', function(){
    document.getElementById('window__width').innerHTML = 'width = ' + innerWidth + ' height = ' + innerHeight + ' window oX = ' + Math.round(window.pageYOffset);
})

