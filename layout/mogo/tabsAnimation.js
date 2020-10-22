const active = (id) => {
    let scrollBar = document.getElementById('scroll__bar' + id);
    let arrow = document.getElementById('arrow' + id)
    if (scrollBar.className === 'scroll__bar active') {
        scrollBar.className = 'scroll__bar';
        arrow.className = 'arrow'
    } else {
        scrollBar.className = 'scroll__bar active';
        arrow.className = 'arrow active';
        for (let i = 1; i <= 3; i++) {
            if (i === id) {
                continue
            }
            document.getElementById('scroll__bar' + i).className = 'scroll__bar';
            document.getElementById('arrow' + i).className = 'arrow';
        }
    }
}