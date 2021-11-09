class Snow
{
	constructor(x,y,r)
	{
		var options = {
            friction: 0.6,
            density: 0.1,
	}
         
        this.r=r;
		this.x=x;
		this.y=y;
        this.image=loadImage("snow4.webp");
		this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
		
		World.add(world, this.body);
    }
	display()
	{
			var pos=this.body.position;
	        
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER);
			imageMode(CENTER);
			image(this.image, 0,0, this.r, this.r);
			pop()
			
	}
}
