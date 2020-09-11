
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine;
var boy , boyImg , mango1 , mango2 , mango3 , mango4 , ground1 , tree1 , stone1 , rope;

function preload(){
boyImg = loadImage("boy.png"); 
	


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(400,height,800,20);
	boy = createSprite(320,650,20,20);
  boy.addImage(boyImg);
  boy.scale = 0.07;
    
	tree1 = new tree(650,560,280,280);
	
	stone1 = new stone(280,620,50,50);

  rope = new SlingShot(stone1.body,{x:280,y:620});    

  mango1 = new mango(620,530,30,30);
  mango2 = new mango(550,510,30,30);
  mango3 = new mango(585,540,30,30);
  mango4 = new mango(585,500,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  ground1.display();
  boy.display();
  tree1.display();
  stone1.display();
  rope.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  drawSprites();

 
}

function mouseDragged () {
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  rope.Fly();
}


function keyPressed() {
if (keyCode === 32) {
  Matter.Body.setPosition(stone1.body,{x:280,y:620})
  boy.attach(stone1.body)

}

}
