class Car {
  constructor() {
    // this.img
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;
      this.w = 100;
      this.h = this.w / imgRatio;
      this.x = 400;
      this.y = 1350;
      this.speed = 10;
    }
    img.src = "images/car.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h);

  }

  moveLeft() {
    this.x = this.x - this.speed;
    if (this.x < 40) {
      this.x = 40;
    }
  }
  moveRight() {
    this.x = this.x + this.speed;
    if (this.x > 860) {
      this.x = 860;
    }
    }
}