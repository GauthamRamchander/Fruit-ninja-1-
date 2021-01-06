var PLAY = 1
var END = 0
var gameState = 1
var Score = 0
var fruit,knife,knifeimage
var fruit1,fruit2,fruit3,fruit4
var monsterimage,gameoverimage

function preload(){
  knifeimage=loadImage("sword.png")
fruit1=loadImage("fruit1.png")
fruit2=loadImage("fruit2.png")
fruit3=loadImage("fruit3.png")
fruit4=loadImage("fruit4.png")
monsterimage=loadImage("alien1.png") 
gameoverimage=loadImage("gameover.png")
}


function draw(){
fruits();
Enemy();
   if(gameState === PLAY){
knife.y = World.mouseY
knife.x=World.mouseX

  }
if(enemygroup.isTouching(knife)){
  gameState = END
}  
if(gameState === END){
 fruitgroup.destroyEach();
 enemygroup.destroyEach();
 fruitgroup.setvelocityX = 0
 enemygroup.setvelocityX = 0 
  Score = 0
  knife.x = 200
  knife.y = 200
  knife.addImage(gameoverimage)
  knife.scale = 1
  }
if(fruitgroup.isTouching(knife)){
fruitgroup.destroyEach();
Score = Score + 3  
} 
 if(enemygroup.isTouching(knife)) 
gameState = END
background("brown")
           
  text("Score: "+ Score, 250,50);
  drawSprites()
}
 
function setup(){
  knife = createSprite(200,200,20,20)
  knife.addImage(knifeimage)
  knife.scale = 0.5
  fruitgroup = new Group();
  enemygroup = new Group();
 }
function fruits(){
if(World.frameCount%80===0){
fruit=createSprite(400,200,20,20)
fruit.scale=0.2;
fr=Math.round(random(1,4));
if(fr == 1){
fruit.addImage(fruit1) 
}
if(fr == 2){
fruit.addImage(fruit2) 
}
if(fr == 3){
fruit.addImage(fruit3) 
}
if(fr == 4){
fruit.addImage(fruit4) 
}
fruit.y=Math.round(random(50,340))
fruit.velocityX = -7
fruit.setLifetime = 150
fruitgroup.add(fruit)  
}
}
function Enemy(){
if(World.frameCount%200===0) {
monster = createSprite(400,200,20,20)
monster.addAnimation("moving",monsterimage)
monster.y=Math.round(random(100,300))
monster.velocityX = -8
monster.setLifetime = 150
enemygroup.add(monster)  
} 
}