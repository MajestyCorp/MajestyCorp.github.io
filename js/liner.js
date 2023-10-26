const maxWidth = 15;
const minWidth = 2;
const maxSpeed = 35;
const minSpeed = 6;
const hueDif = 50; // Hue +/-
const glow = 5;

function Liner(options) {
    this.canvas = document.getElementById(options.canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.bgg = document.getElementById(options.glowId);
    this.hue = options.hue ? options.hue : Math.random()*360;

    this.w = this.ctx.canvas.width = window.innerWidth;
    this.h = this.ctx.canvas.height = window.innerHeight;

    this.md = Math.round(10 * this.w / 512);  
    
    this.pushDots(this.md);
    this.ctx.globalCompositeOperation = "lighter";
    this.bgg.style.background = "radial-gradient(ellipse at center, hsla(" + this.hue + ",100%,50%,.6) 0%,rgba(0,0,0,0) 100%)";
}

Liner.prototype.onresize = function() {
    this.w = this.ctx.canvas.width = window.innerWidth;
    this.h = this.ctx.canvas.height = window.innerHeight;
    this.md = Math.round(10 * this.w / 512);  

    this.pushDots(this.md);

    this.ctx.globalCompositeOperation = "lighter";
}

Liner.prototype.pushDots = function(num) {
    var maxHeight = this.h * .6
    var minHeight = this.h * .3;

    this.dots = [];

    for (i = 1; i < num; i++) {
        this.dots.push({
            x: Math.random() * this.w,
            y: Math.random() * this.h * 0.5,
            h: Math.random() * (maxHeight - minHeight) + minHeight,
            w: Math.random() * (maxWidth - minWidth) + minWidth,
            c: Math.random() * (2 * hueDif) + (this.hue - hueDif),
            m: Math.random() * (maxSpeed - minSpeed) + minSpeed
        });
    }
}

Liner.prototype.render = function() {
    var maxWidth = 15;

    this.ctx.clearRect(0, 0, this.w, this.h);
    for (i = 1; i < this.dots.length; i++) {
        var dot = this.dots[i];

        this.ctx.beginPath();
        grd = this.ctx.createLinearGradient(dot.x, dot.y, dot.x + dot.w, dot.y + dot.h);
        grd.addColorStop(.0, "hsla(" + dot.c + ",50%,50%,.0)");
        grd.addColorStop(.2, "hsla(" + dot.c + 20 + ",50%,50%,.2)");
        grd.addColorStop(.5, "hsla(" + dot.c + 50 + ",70%,60%,.5)");
        grd.addColorStop(.8, "hsla(" + dot.c + 80 + ",50%,50%,.2)");
        grd.addColorStop(1., "hsla(" + (dot.c + 100) + ",50%,50%,.0)");
        this.ctx.shadowBlur = glow;
        this.ctx.shadowColor = "hsla(" + (dot.c) + ",50%,50%,1)";
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(dot.x, dot.y, dot.w, dot.h);
        this.ctx.closePath();
        dot.x += dot.m / 100;
        if (dot.x > this.w + maxWidth) {
            dot.x = -maxWidth;
        }
    } 
}
