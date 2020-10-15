let preloader1 = document.getElementById('preloader1');
let preloader2 = document.getElementById('preloader2');

if (innerWidth <= 700) {
    document.getElementById('load__for__mobile').style.display = 'none';
    document.getElementById('load__more').style.display = 'block';

}

const loadMore = () => {

    if (innerWidth <= 700) {
        document.getElementById('preloader__for__mobile').style.display = 'block';
        document.getElementById('load').style.display = 'none';

        setTimeout(() => {
            document.getElementById('preloader__for__mobile').style.display = 'none';
            document.getElementById('load__for__mobile').style.display = 'block';
            document.getElementById('hide').style.display = 'inline-block';
        }, 800)
    } else {
        if (checkBox.checked) {
            preloader2.style.display = 'block'
        } else {
            preloader1.style.display = 'block'
        }
        document.getElementById('load').style.display = 'none';

        setTimeout(() => {
            preloader2.style.display = 'none'
            preloader1.style.display = 'none'
            document.getElementById('load__more').style.display = 'flex';
            document.getElementById('hide').style.display = 'inline-block';
        }, 800)
    }

}

const hide = () => {

    if (innerWidth <= 700) {
        document.getElementById('load__for__mobile').style.display = 'none';
        document.getElementById('hide').style.display = 'none';
        document.getElementById('load').style.display = 'inline-block';
    } else {
        document.getElementById('load__more').style.display = 'none';
        document.getElementById('hide').style.display = 'none';
        document.getElementById('load').style.display = 'inline-block';
    }


}

