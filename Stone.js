class Stone{
    constructor(x,y,width,height){

        var options = {
            'restitution':0.8,
            'friction':0.9,
            'density':12
        }

        this.body = Bodies.rectangle(x,y,100,50,options);

        
        this.width = width
        this.height = height

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        strokeWeight(2);
        stroke("black");
        //fill("grey");

        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}