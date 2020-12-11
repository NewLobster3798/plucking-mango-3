class stone{
    constructor(x, y,radius){
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:1.0,
            density:1.2
        }
        this.body = Bodies.circle(x, y,radius,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("stone.png");
   
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,32,32);
    }
   
}