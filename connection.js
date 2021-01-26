class Connection{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.connection = Constraint.create(options);
        World.add(world, this.connection);
    }

    fly()
    {
        this.connection.bodyA= null;
    }

    display(){
        if(this.connection.bodyA)
        {
            var pointA = this.connection.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}