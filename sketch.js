
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperobj,box,b,bimg;


function preload()
{
bimg=loadImage("images/dustbingreen.png")

}


function setup() {
	createCanvas(1300, 700);

  rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
  box=new dustbin(1200,650);
  paperobj=new paper(200,600,40);
  
  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red");
  ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
  World.add(world, ground);
 b=createSprite(1200,560,50,10);
b.addImage(bimg);
b.scale=0.6;

	//Create the Bodies Here.
  
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  paperobj.display();
  box.display(); 
  drawSprites();
  
  
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   // Look at the hints in the document and understand how to make the package body fall only on
   Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85});
     
   }
 }

