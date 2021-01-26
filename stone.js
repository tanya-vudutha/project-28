class Stone
{
    constructor(x, y, r) 
    {
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.image=loadImage("stone.png");
        World.add(world, this.body);
      }
      display()
      {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER)
        imageMode(RADIUS);
        //strokeWeight(3);
        //fill(255,0,255);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}