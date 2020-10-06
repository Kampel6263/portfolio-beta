//scroll
let home = document.getElementById('home');
let homeLink = document.querySelector('.home__link');

let about = document.getElementById('about');
let aboutLink = document.querySelector('.about__link');

let portfolio = document.getElementById('portfolio');
let portfolioLink = document.querySelector('.portfolio__link');

let contacts = document.getElementById('contacts');
let contactsLink = document.querySelector('.contacts__link');


function scrollToHome() {
    home.scrollIntoView({block: "start", behavior: "smooth"});
}

function scrollToAbout() {
    about.scrollIntoView({block: "start", behavior: "smooth"});
}

function scrollToPortfolio() {
    portfolio.scrollIntoView({block: "start", behavior: "smooth"});
}

function scrollToContacts() {
    contacts.scrollIntoView({block: "start", behavior: "smooth"});
}


homeLink.addEventListener('click', scrollToHome);
aboutLink.addEventListener('click', scrollToAbout);
portfolioLink.addEventListener('click', scrollToPortfolio);
contactsLink.addEventListener('click', scrollToContacts);
// scroll end >


// linkStatus
const pageControl = (number) => {
    document.getElementById('active' + number).className = 'about__link active';
    for (let i = 1; i < 5; i++) {
        if (i === number) {
            continue
        }
        document.getElementById('active' + i).className = 'about__link';
    }
}

let titlePage = document.getElementById('title__page').offsetHeight - 150;
let aboutPage = about.offsetHeight + titlePage;
let portfolioPage = portfolio.offsetHeight + aboutPage;
let footerPage = document.getElementById('footer').offsetHeight + portfolioPage;


window.addEventListener('scroll', function () {
    if (window.pageYOffset <= titlePage) {
        pageControl(1);
    } else if (window.pageYOffset >= titlePage && window.pageYOffset <= aboutPage) {
        pageControl(2);
    } else if (window.pageYOffset >= aboutPage && window.pageYOffset <= document.getElementById('portfolio').offsetHeight + aboutPage) {
        pageControl(3);
    } else if (window.pageYOffset >= document.getElementById('portfolio').offsetHeight + aboutPage && window.pageYOffset <= footerPage) {
        pageControl(4);
    } else {
        pageControl(4);
    }
});
// linkStatus end >