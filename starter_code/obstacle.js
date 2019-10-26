function random(from, to) {
  return from + Math.floor(Math.random()*(to - from))
}

class Obstacle {
  constructor() {
    this.w = random(W/3,(2/3*W));
    this.h = 40;
    this.x = random(0,W-this.w);
    this.y = 0;
  }

  draw() {
    ctx.fillStyle = "brown";
    ctx.fillRect(this.x,this.y,this.w,this.h);
  }

  hits(car) {
    if ( (((this.x<car.x)&&(this.x+this.w>car.x))||
   ((this.x<car.x+car.w)&&(this.x +this.w>car.x+car.w)))
   && (((this.y+this.h)>car.y)&&((this.y+this.h)<car.y+car.h)) ){
     gameover=true;
  }
}}