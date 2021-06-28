const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
  
var engine,world,snow




function setup() {
  createCanvas(800,400);

  engine = Engine.create()
  world = engine.world
  createSprite(400, 200, 50, 50);
  snow = new Snow()
}

function draw() {
  background("black");  
  Engine.update(engine)
  snow.display()
  drawSprites();
}