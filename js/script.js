var options1 = {
    canvasId: "canvas1",
    glowId: "glow1",
    hue: 197,
};
var options2 = {
    canvasId: "canvas2",
    glowId: "glow2",
    hue: 140,
};
var options3 = {
    canvasId: "canvas3",
    glowId: "glow3",
    hue: 179,
};
var options4 = {
    canvasId: "canvas4",
    glowId: "glow4",
    hue: 272,
};
var options5 = {
    canvasId: "canvas5",
    glowId: "glow5",
    hue: 160,
};

var liner1 = new Liner(options1);
var liner2 = new Liner(options2);
var liner3 = new Liner(options3);
var liner4 = new Liner(options4);
var liner5 = new Liner(options5);

window.onresize = function () {
    liner1.onresize();
    liner2.onresize();
    liner3.onresize();
    liner4.onresize();
    liner5.onresize();
};

var ind = 0;

function loop() {
    switch(ind) {
        case 0:
            liner1.render();
            break;
        case 1:
            liner2.render();
            break;
        case 2:
            liner3.render();
            break;
        case 3:
            liner4.render();
            break;
        case 4:
            liner5.render();
            break;
    }

    ind = (ind+1) % 5;
    window.requestAnimationFrame(loop);
}

loop();

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}