const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var polygonImg;
var engine,world;
var ground,stand;

var score = 0;

function preload(){
    polygonImg = loadImage("polygon.png");
}
function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);
    
    //Engine.update(engine);    
    ground = new Ground(400,590,800,10);
    stand = new Ground(500,400,250,10); 
//first pyramiad level 1
    fill("turquoise");
    box1 = new Box(420,375,40,40);
    box2 = new Box(460,375,40,40);
    box3 = new Box(500,375,40,40);
    box4 = new Box(540,375,40,40);
    box5 = new Box(580,375,40,40);
// first pyramiad level 2
    
    box6 = new Box(440,335,40,40);
    box7 = new Box(480,335,40,40);
    box8 = new Box(520,335,40,40);
    box9 = new Box(560,335,40,40);
// first pyramiad level 3
    
    box10 = new Box(460,295,40,40);
    box11 = new Box(500,295,40,40);
    box12 = new Box(540,295,40,40);
// first pyramiad level 4
   
    box13 = new Box(480,255,40,40);
    box14 = new Box(520,255,40,40);
// first pyramiad level 5
   
    box15 = new Box(500,215,40,40);
    //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});
}
function draw(){
    background(0);
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)
    ground.display();
    stand.display();
    fill("turquoise");
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
   box3.score();
    box4.display();
   box4.score();
    box5.display();
    box5.score();
    fill("yellow");
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    fill("purple");
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    fill("yellow");
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    fill("purple");
    box15.display();
    box15.score();
    

    imageMode(CENTER);
    image(polygonImg, ball.position.x, ball.position.y, 40,40);

    slingShot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
    slingShot.fly();
  }

  function keyPressed(){
      if(keyCode === 32){
          slingShot.attach(this.ball);
      }
  }