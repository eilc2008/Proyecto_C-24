const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;

var rubberBall;
var stoneRect;
var ironBlock;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubberBall = new Rubber(600,575,50,50);
    stoneRect = new Stone(450,570,100,50);
    ironBlock = new Iron(750,550,100,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    console.log(stoneRect.x);

    plane.display();
    hammer.display();

    rubberBall.display();
    stoneRect.display();
    ironBlock.display();
}