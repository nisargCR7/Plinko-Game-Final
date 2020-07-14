const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score = 0;
var count = 0;
var gameState ="start";



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 
  for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, 300));
  }
  for(var i=0 ; i<800;i=i+60){
    for(var j=100 ; j<460;j=j+120){
    
      p = new Plinko(i,j,10);
      plinkos.push(p);
      
      a = new Plinko(i+20,j+60,10);
      plinkos.push(a);
    }
  }
}
  
 function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();
  console.log(count)
  console.log(gameState)
  console.log(mouseX)

  
  if ( gameState =="end") {
  
  textSize(100);
  text("GameOver", 150, 250);
  //return
  }
 
  
 
  
 
  for (var i = 0; i < plinkos.length; i++) {
  plinkos[i].display(i); 
  }
  
  if(particle!=null)
  {
  particle.display();
  
  if (particle.body.position.y>760)
  {
  if (particle.body.position.x < 300) 
  {
  score=score+500; 
  particle=null;
  if ( count>= 5) { gameState ="end";}
  }
 
 
  else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
  {
  score = score + 100;
  particle=null;
  if ( count>= 5) { gameState ="end";}
 
  }
  else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
  {
  score = score + 200;
  particle=null;
  if ( count>= 5){ gameState ="end";}
 
  } 
  
  }
  
  }
 
  for (var k = 0; k < divisions.length; k++) 
  {
  divisions[k].display();
  }
  
 }
 
 function mouseClicked()
 {
  
 if(gameState!=="end")//not equal to 
 {
  particle=new Particle(mouseX, 10, 10, 10); 
  count++;

} 

}