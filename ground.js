class Ground{
    constructor(x,y,length,height){
    var options = {
        isStatic:true,
    }
    this.body = Bodies.rectangle(x,y,length,height,options);
    World.add(world,this.body);
    this.length = length;
    this.height = height;
    console.log(length);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.length,this.height);
    
    }
    }