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

var liner1 = new Liner(options1);
var liner2 = new Liner(options2);
var liner3 = new Liner(options3);

window.onresize = function () {
    liner1.onresize();
    liner2.onresize();
    liner3.onresize();
};

function loop() {
    liner1.render();
    liner2.render();
    liner3.render();
    window.requestAnimationFrame(loop);
}

loop();