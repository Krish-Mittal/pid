class pap
{
    constructor(x,y,r)
    {
     var thrown ={
         'isStatic':false,
         'restitution':0.3,
         'density':1.2,
         'friction':0.5
     }
     this.body=bod.circle(x,y,r,thrown)
     this.r=r;
     wor.add(world,this.body);
    }
    display()
    {
     ellipseMode(CENTER);
     ellipse(this.body.position.x,this.body.position.y,this.r);
  //   this.image=loadImage("paper.png");

    }
}