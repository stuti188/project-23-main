const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   ComputerBase = new computerbase(50,200,20,20);
   computerPlayer = new Computerplayer(50,50,20,10);
   Player = new player (285,playerBase.posiion.y-153,50,180);
   playerBase = new playerbase (300,random(450,height-300),180,150);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   ComputerBase.display()
   computerPlayer.display()
   Player.display()
   playerBase.display()






   //display Player and computerplayer


}
