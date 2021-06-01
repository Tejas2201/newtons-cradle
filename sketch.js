
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var roof1;
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);



	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(200,200,200,20)

	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	startBobPositionX=width/2; 
	startBobPositionY=height/4+500;
	
	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0) 
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0) 
	rope3=new rope(bobObject3.body,roofObject.body,0, 0) 
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0) 
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}



