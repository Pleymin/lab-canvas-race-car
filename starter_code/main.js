let car;
let obstacles;
let gameover;
let points = 0  ;

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;




function draw() {
  //
  // Iteration 1: road drawing
  //
    ctx.fillStyle= "Gray";
    ctx.fillRect(0,0,1000,1600);
    ctx.fillStyle= "Green";
    ctx.fillRect(0,0,30,1600);
    ctx.fillStyle= "White";
    ctx.fillRect(30,0,10,1600);
    ctx.fillStyle= "White";
    ctx.fillRect(960,0,10,1600);
    ctx.fillStyle= "Green";
    ctx.fillRect(970,0,30,1600);

    for (i=0;i<40;i++){
      ctx.fillStyle= "White";
      ctx.fillRect(500,0 + 40*i,5,20);
    }
  //
  // Iteration 2: car drawing
  //
  car.draw();
  //
  // Iteration #4: obstacles
  //
  if (frames%400 == 0){
    var obstacle = new Obstacle(); 
    obstacles.push(obstacle);
    points = points +10;
    }

    obstacles.forEach(function(el){
    el.y += 1;
    el.draw();
  })

  //
  // Iteration #5: collisions
  //
    obstacles.forEach(function(el){
      el.hits(car);
    })
  //
  // Iteration #6: points
  //
    
    ctx.font = "30px Georgia";
    ctx.fillStyle = "White";
    ctx.fillText("Score : "+points,100,100);

}

document.onkeydown = function (e) {
  if (!car) return;
  
  if(e.which === 39){
    car.moveRight();
    car.speed+=10;
  }
  if(e.which === 37){
    car.moveLeft();
    car.speed+=10;
  }
}

document.onkeyup = function(){
  car.speed = 25;
}

let frames = 0;
function animLoop() {
  frames++;
  

  draw();
  
  if (!gameover) {
    requestAnimationFrame(animLoop);
  }
}

function startGame() {
  car = new Car;
  obstacles = [];

  requestAnimationFrame(animLoop);
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

startGame();