const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash,trashImage;

function preload()
{
  trashImage = loadImage("dustbingreen.png");
}

function setup() 
{
	createCanvas(800, 700);

	trash = createSprite(580,610,20,20);
	trash.addImage(trashImage);
	trash.scale = 0.5

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)

	paper = new Paper(100,650,30)
	paper.sclae = 0.1;

	right = new Dustbin(630,650,20,80)
	left = new Dustbin(530,650,20,80)
	bottom = new Dustbin(575,680,100,20)

	//Create the Bodies Here.
  

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("white");
  
  ground.display();

  paper.display();

  right.display();
  left.display();
  bottom.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) 
	{
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-4.8} )
	   
	 }
   }



