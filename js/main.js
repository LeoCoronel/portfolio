/* Cambios de theme */

let theme = localStorage.getItem('theme');

(theme == null) ? setTheme('light') : setTheme(theme);

let themeDots = document.getElementsByClassName("theme-dot");

for(var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        console.log('option clicked', mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'css/main.css';
        document.getElementById('stars-theme').href = 'css/sun.css';
    }
    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'css/night.css';
        document.getElementById('stars-theme').href = 'css/stars.css';
    }
    localStorage.setItem('theme', mode);
}

/* Underline navbar */
let about = document.getElementById('about');
let portfolio = document.getElementById('portfolio');
let contact = document.getElementById('contact');

let linkAbout = document.getElementById('about-link');
let linkPortfolio = document.getElementById('portfolio-link');
let linkContact = document.getElementById('contact-link');

let p1 = about.offsetTop;
let p2 = portfolio.offsetTop;
let p3 = contact.offsetTop;

/* Sticky navbar */
let nav = document.getElementById("navbar");
let sticky = nav.offsetTop;

window.addEventListener('scroll', function() {
    let nav = document.getElementById("navbar");
    nav.classList.toggle('sticky', window.scrollY > sticky);
    linkAbout.classList.toggle('active', window.scrollY >= p1 && window.scrollY < p2 - 1);
    linkPortfolio.classList.toggle('active', window.scrollY >= p2 - 1 && window.scrollY < p3 - 1 );
    linkContact.classList.toggle('active', window.scrollY >= p3);
});



