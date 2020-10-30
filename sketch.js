const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball;
var engine,world,ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,10,option);
  World.add(world,ground);
  var ball_option={
    restitution:0.7
  }
  console.log(ground);
  ball=Bodies.circle(200,50,20,ball_option);
  World.add(world,ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  }