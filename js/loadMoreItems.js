let preloader = document.getElementById('preloader');

if(innerWidth <= 700){
    document.getElementById('load__for__mobile').style.display = 'none';
    document.getElementById('load__more').style.display = 'block';

}

const loadMore = () => {

    if(innerWidth <= 700){
        document.getElementById('preloader__for__mobile').style.display = 'block';
        document.getElementById('load').style.display = 'none';

        setTimeout(() => {
            document.getElementById('preloader__for__mobile').style.display = 'none';
            document.getElementById('load__for__mobile').style.display = 'block';
            document.getElementById('hide').style.display = 'inline-block';
        }, 800)
    } else {
        preloader.style.display = 'block';
        document.getElementById('load').style.display = 'none';

        setTimeout(() => {
            preloader.style.display = 'none';
            document.getElementById('load__more').style.display = 'flex';
            document.getElementById('hide').style.display = 'inline-block';
        }, 800)
    }

}

const hide = () => {

    if(innerWidth<=700){
        document.getElementById('load__for__mobile').style.display = 'none';
        document.getElementById('hide').style.display = 'none';
        document.getElementById('load').style.display = 'inline-block';
    } else {
        document.getElementById('load__more').style.display = 'none';
        document.getElementById('hide').style.display = 'none';
        document.getElementById('load').style.display = 'inline-block';
    }


}

