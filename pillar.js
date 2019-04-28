class Pillar {
    constructor(x_, y_, width_, height_, angle_, rate_) {
        this.x = x_;
        this.y = y_;
        this.width = width_;
        this.height = height_;
        this.angle = angle_;
        this.rate = rate_
    }

    show() {
        let h = map(sin(this.angle), -1, 1, 0, this.height);
        fill(map(sin(this.angle), -1, 1, 0, 255), map(cos(this.angle), -1, 1, 255, 0), map(sin(this.angle), -1, 1, 255, 0));
        rectMode(CENTER);
        noStroke();
        
        push();
        
        translate(this.x, this.y);
        
        box(this.width,  h + 2, this.width)
        pop();
        this.angle += this.rate;
    }
}