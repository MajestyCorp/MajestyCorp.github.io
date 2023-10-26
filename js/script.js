var options1 = {
    canvasId: "canvas1",
    glowId: "glow1",
    hue: 197,
};
var options2 = {
    canvasId: "canvas2",
    glowId: "glow2",
};

var liner1 = new Liner(options1);
var liner2 = new Liner(options2);

window.onresize = function () {
    liner1.onresize();
    liner2.onresize();
};

function loop() {
    liner1.render();
    liner2.render();
    window.requestAnimationFrame(loop);
}

loop();