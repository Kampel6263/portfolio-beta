let header = document.getElementById('header')
const fun1 = () => {

    header.style.background = "#e40033f2";
    header.style.position = 'fixed';
    header.style.padding = '0px 0';
    header.style.boxShadow = '0px 1px 10px 0px rgba(0,0,0,0.75)'


}

const fun2 = () => {
    header.style.background = "none";
    header.style.position = 'absolute';
    if(innerWidth <= 500){
        header.style.padding = '7px 0';
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
    }
});