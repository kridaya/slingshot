
class slingshot {
    constructor(bodyA,pointB){

       var Cons_options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.04,
           length:10
       }

   this.pointB=pointB
        this.sling = Constraint.create(Cons_options);
        World.add(world,this.sling)
    }

    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){

        
       var pointA=this.sling.bodyA.position;
       var pointB=this.pointB; 
     strokeWeight(5);
     line (pointA.x,pointA.y,pointB.x,pointB.y);
     line (pointA.x-20,pointA.y,pointB.x,pointB.y);
    }
}
}






























