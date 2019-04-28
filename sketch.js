let gifLength = 400;
let stopPoint;
let canvas;
let capturer;

let pils = [];
let pilCount = 50;

function setup() {
    capturer = new CCapture({format: 'gif', workersPath: './js/', verbose: true});

    var p5canvas = createCanvas(500, 500, WEBGL);
    
    canvas = p5canvas.canvas;

    capturer.start();

    for (let x = width/pilCount; x < width - width/pilCount; x+= width/pilCount) {
        pils.push(new Pillar(x + width / pilCount / 2, height/2, width / pilCount -2, random(150, 300), random(0,0.4 * PI), 0.005 * PI));
    }

    stopPoint = pils[0].angle + 2 * PI;
}

function draw() {
    background(61);
   
    translate(-250, -250);
    
    for (let i = 0; i < pils.length; i++) {
        pils[i].show();
    }

    capturer.capture(canvas);
    // if (frameCount < gifLength) {
    //     capturer.capture(canvas);
    // } else if (frameCount === gifLength) {
    //     capturer.stop();
    //     capturer.save();
    // }
}