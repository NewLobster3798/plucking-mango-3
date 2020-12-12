class Sling{
  constructor(body1,point1){
   var option = {
    bodyA:body1,
    pointB:point1,
    stiffness: 0.04,
    length: 1
   }
   this.bodyA = body1
   this.pointB = point1
   
   this.sling = Constraint.create(option);
   World.add(world,this.sling)
   console.log(this.sling)
  }
  release(){
   
    this.sling.bodyA = null;
  }
 attach(body){
    this.sling.bodyA = body;   
  }
  display(){
   
   
  var pointA = this.bodyA.position;
  var pointB = this.pointB;
  if(pointA.x < 180 && pointA.x >110 && pointA.y <550 && pointA.y > 480) {
    push()

    strokeWeight("black");
    line(pointA.x,pointA.y, pointB.x, pointB.y);

    pop()
    }
  }

}