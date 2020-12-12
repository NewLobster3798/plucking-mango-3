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
        this.image = loadImage("stone.png");
        this.radius = radius
   
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);
    }
   
}