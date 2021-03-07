var bg,backImg;
var rocket,rocketImg
var gameState="play";
var enemyGroup,alien1Img,alien2Img;

function preload(){
backImg=loadImage("back.png");
rocketImg=loadImage("sprite_0.png");
alien1Img=loadImage("sprite_0-1.png");
alien2Img=loadImage("sprite_0-2.png");
}

function setup() {
createCanvas(600,600)
bg=createSprite(300,300,600,600);
bg.addImage(backImg);
bg.scale=3;
bg.velocityX=-2
bg.x=bg.width/1
  
rocket=createSprite(60,300,0,0);
rocket.addImage(rocketImg);
rocket.scale=0.5;

enemyGroup=new Group();
}

function draw() {
background("white");

if(bg.x<0){
    bg.x=bg.width/1;
  }
if(bg.x<100){
  bg.x=bg.width/1
  }
if(keyDown("up_arrow")){
rocket.y=rocket.y-6;
 } 
if(keyDown("down_arrow")){
rocket.y=rocket.y-6;
 } 
if(gameState==="play"){
  if(keyDown("space")){
  rocket.velocityX=3;
}
}
  
rocket.velocityX=rocket.velocityX-0.4;
  
 if(rocket.isTouching(enemyGroup)){
   bg.velocity=0;
   rocket.velocity=0;
   enemyGroup.velocity=0;
 } 
spawnEnemy();
drawSprites();
}
function spawnEnemy(){
  if(frameCount%300===0){
  alien=createSprite(500,300,0,0);
  alien.addImage(alien1Img);
  alien.velocity=4;
  alien.lifetime=100;
  enemyGroup.add(alien);
}
   if(frameCount%200===0){
   alien1=createSprite(450,300,0,0);
   alien1.addImage(alien2Img);
   alien1.velocityX=4;
   alien1.lifetime=100;
   enemyGroup.add(alien1);
 }
  
}