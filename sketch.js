
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	box1=new Box(587,570,20,150);
	ground=new Ground(600,height,1200,80);
	box2=new Box(650,655,150,20);
	box3=new Box(715,570,20,150);
    paperObj = new Paper(80,635,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);
  fill("red");
  text(mouseX+" "+mouseY,mouseX,mouseY);
   
	 box1.display();
	 box2.display();
	 box3.display();
	 ground.display();
	 paperObj.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85});
	}
}



