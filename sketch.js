
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstaclesGroup


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  survivalTime = 0;
  
  createCanvas(600, 300);
  
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(200,200,1600,20);
  
  ground.x = ground.width /2;
  ground.velocityX = -4;

  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  
}


function draw() {

  background("lightblue");
  
  if (ground.x < 0){
     ground.x = ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  obstacle();
  food();
  
  text("Survival Time : " + survivalTime , 450 , 50);
  if(bananaGroup.isTouching(monkey)){
    survivalTime = survivalTime + 10;
    bananaGroup[0].destroy();
  }
  
  
  
  drawSprites();
}

function food(){
  if (frameCount % 80 === 0){
   var banana = createSprite(600,65,10,40);
   banana.y = Math.round(random(10,120));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -6; 
   banana.lifetime = 100;
    
   
   bananaGroup.add(banana);
  }
}

function obstacle(){
  if (frameCount % 100 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage(obstaceImage);
   obstacle.scale = 0.1;
   obstacle.lifetime = 100;
   
   obstaclesGroup.add(obstacle);
  }
}  