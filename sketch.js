const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var snowball1;
var snowball2;
var snowball3;

function preload(){
bg = loadImage("snow1.jpg");
PacManImg = loadImage("Pac Man.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
 PacMan = createSprite(400, 200, 50, 50);
 PacMan.addImage(PacManImg);
 PacMan.scale = 0.5;
 snowball1 = new Snow(400,10,50);
}

function draw() {
  background(bg);
  Engine.update(engine)  
  snowball1.display()
  drawSprites();
}