const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world;
var treeObj, stoneObj, groundObj, launcherObj;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var boy;
var slingshot;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1130,100,30);
	mango2=new mango(1000,150,40);
	mango3=new mango(900,200,25);
	mango4=new mango(1150,203,30);
	mango5=new mango(1050,210,25);
	mango6=new mango(1230,200,40);
	mango7=new mango(970,250,30);
	mango8=new mango(1040,80,30);

	treeObj=new tree(1050,580);
	groundObj=new ground(width/2,600,width,20);
	stoneObj=new Stone(210,390,50)

	slingshot = new SlingShot(stoneObj.body, {x:235,y:420});
	
	Engine.run(engine);

}

function draw() {

	background(230);
	Engine.update(engine);
	textSize(20)
	text("Press Space to get a second Chance to Play!!", 30, 30);
	image(boy ,200,340,200,300);

	groundObj.display();

	treeObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	stoneObj.display();

	slingshot.display();

	detectCollision(stoneObj,mango1);
	detectCollision(stoneObj,mango2);
	detectCollision(stoneObj,mango3);
	detectCollision(stoneObj,mango4);
	detectCollision(stoneObj,mango5);
	detectCollision(stoneObj,mango6);
	detectCollision(stoneObj,mango7);
	detectCollision(stoneObj,mango8);

}

function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}

function detectCollision(lstone,lmango){
	mangoPosition=lmango.body.position
	stonePosition=lstone.body.position

	var distance=dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235,y:420});
		slingshot.attach(stoneObj.body);
	}	
}