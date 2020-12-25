var bullet,wall;
var speed,weight;
var damage;
var thickness
function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  bullet = createSprite(50,200,25,50);
  thickness = random(22,83)
  wall = createSprite(1500,200,thickness,height/2)
  bullet.velocityX = speed;  
  bullet.shapeColor = ("white")
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  wall.shapeColor = ("grey") 
}

function draw() {
  background("black");
  if(bullet.x - wall.x < wall.width / 2 + bullet.width / 2 && wall.x - bullet.x<wall.width / 2 + bullet.width / 2 && bullet.y - wall.y < wall.height / 2 + bullet.height / 2 && wall.y - bullet.y<wall.height / 2 + bullet.height / 2 ){
    bullet.velocityX = 0;
    
  }
  if(damage <10){
    wall.shapeColor = ("green")
  }else if (damage>10){
    wall.shapeColor = ("red")
  }
  console.log(damage)
  drawSprites();
}