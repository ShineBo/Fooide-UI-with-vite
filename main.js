import './style.scss'

import Typed from 'typed.js';
import ScrollReveal from "scrollreveal";

var options = {
    strings: ['Foods', 'Drinks'],
    typeSpeed: 60,
    backSpeed : 100,
    startDelay: 300,
    loop : true
};

var typed = new Typed('#homeTest', options);

var slideUp = {
    distance: '50px',
    origin: 'bottom',
    opacity: null,
    duration: 700,
    interval: 300
};

ScrollReveal().reveal('.slide-up', slideUp);

let slideDown = {
    distance: '70px',
    origin: 'top',
    duration : 1000,
    interval : 500
};

ScrollReveal().reveal('.content', slideDown);
