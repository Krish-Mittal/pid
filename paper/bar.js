class bar 
{
    constructor(x,y,w,h)
    {
        var op=
        {
         isStatic:true,
        }
        this.body=bod.rectangle(x,y,w,h,op);
        this.h=h;
        this.w=w;
        wor.add(world,this.body);
    }
    display()
    {
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}