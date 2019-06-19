let bs = [];
let b;
function setup() {
    createCanvas(innerWidth, innerHeight);
    b = new B(100, 100, 0, 0);
}

function draw() {
    background(255);
    if(frameCount % 10 === 0) {
        bs.push(new B(b.x, b.y, 0, 0));
        console.log('new item');
    }
    b.show();
    b.update();
    for (let i = 0; i < bs.length; i++) {
        bs[i].show();
        // bs[i].update();
    }
}

function B(x, y, speedX, speedY) {
    this.dirX = 0;
    this.dirY = 0;
    this.x = x;
    this.y = y;
    this.r = 20;
    this.speedX = speedX;
    this.speedY = speedY;

    this.show = function () {
        fill(0, 200, 10);
        ellipse(this.x, this.y, this.r, this.r);
    }
    this.update = function () {
        this.dirX = map((mouseX), 0, width, -0.5, 1);
        this.dirY = map((mouseY), 0, height, -0.5, 1);
        this.speedX = random(-1, 1);
        this.speedY = random(-1, 1);
        this.speedX += this.dirX;
        this.speedY += this.dirY;
        this.x += this.speedX;
        this.y += this.speedY;
    }
}