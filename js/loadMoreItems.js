let preloader = document.getElementById('preloader');

console.log(window.innerHeight)

const loadMore = () => {

    preloader.style.display = 'block';
    document.getElementById('portfolio').style.height = '119vh';
    document.getElementById('load').style.display = 'none';

    document.getElementById('portfolio').style.transition = '.03s linear'

    setTimeout(() => {
        preloader.style.display = 'none';
        document.getElementById('load__more').style.display = 'flex';
        document.getElementById('hide').style.display = 'inline-block';
        document.getElementById('portfolio').style.transition = '.3s linear'


    }, 800)


}

const hide = () => {
    document.getElementById('load__more').style.display = 'none';
    document.getElementById('hide').style.display = 'none';
    document.getElementById('load').style.display = 'inline-block';
    document.getElementById('portfolio').style.height = '80vh';
    // preloader.style.display = ''
}