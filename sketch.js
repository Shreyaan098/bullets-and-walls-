var bullet,wall;
var speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor="white"
  thickness=random(22,83)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  speed=random(223,321);
  weight=random(30,52)
  bullet.velocityX=speed;
}
  function draw(){
   
  background(0,0,0);  
  drawSprites();
  if(hasCollided(bullet, wall)) {
     bullet.velocityX=0;
  
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness )
   if(damage>10){
   wall.shapeColor="red"
   }
   if(damage<10){

  wall.shapeColor="green"
   }
  
  }
}
  function  hasCollided (lbullet,lwall){
  
    bulletr=lbullet.x+lbullet.width
    wallLeft=lwall.x
    if(bulletr>=wallLeft){

    return true;
    }
    return false
  }

  





  
  
  
  




