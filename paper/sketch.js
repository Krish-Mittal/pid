const eng=Matter.Engine;
const wor=Matter.World;
const bod=Matter.Bodies;

var engine,world,paper1b,papi,paper1,bar1,bar2,bar3,ground;

function preload()
{
	papi=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 700);

engine=eng.create();
world=engine.world;
paper1=new pap(200,200,50);
/*paper1b=createSprite(paper1.x,paper1.y);
paper1b.addImage(papi);
paper1b.scale=0.05;*/

bar1=new bar(400,570,20,100);
bar2=new bar(470,630,100,20);
bar3=new bar(540,570,20,100);

ground=new bar(400,650,800,20);
}


 function draw() {
  rectMode(CENTER);
  background(0);
  eng.update(engine);

  bar1.display();
  bar2.display();
  bar3.display();

  if(keyWentDown("Up_Arrow"))
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  }
  if(keyWentDown("Down_Arrow"))
  {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-85,y:85});
  }
 /* paper1b.x=paper1.x;
  paper1b.y=paper1.y;*/
  paper1.display();
  ground.display();
  drawSprites();
 
}



