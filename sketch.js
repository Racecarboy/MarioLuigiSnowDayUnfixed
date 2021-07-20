const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var background,backgroundImg;
var FireMarioandLuigi,FireMarioandLuigiAnimation;
var snowflake1,snowflake1Img,snowflake2,snowflake2Img;
var snowflake;
var snowflakelocationselector;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  FireMarioandLuigiAnimation = loadAnimation("Fire Mario and Luigi.gif");
}
function setup() {
  createCanvas(1000,500);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;
  
  background = createSprite(200,100,200,100);
  background.addImage("SnowyTown",backgroundImg);

  snowflakelocationselector = Math.round(1,1000);

  FireMarioandLuigi = createSprite(300,400,20,20);
  FireMarioandLuigi.addAnimation("MarioandLuigi",FireMarioandLuigiAnimation);
  FireMarioandLuigi.scale = 0.2
}

function draw(){
  Engine.update(engine);

  snowflakelocationselector = Math.round(1,1000);

  drawSprites();
}

function MarioandLuigiControls(){
  if(keyCode === 38){
    FireMarioandLuigi.velocityY = -4;
  }
  
  if(keyCode === 38){
    FireMarioandLuigi.velocityY = 0;
  }
  
  if(keyCode === 39){
    FireMarioandLuigi.velocityX = 8;
  }
  
  if(keyCode === 39){
    FireMarioandLuigi.velocityX = 0;
  }
  
  if(keyCode === 37){
    FireMarioandLuigi.velocityX = -8;
  }
  
  if(keyCode === 37){
    FireMarioandLuigi.velocityX = 0;
  }
}

function spawnsnowflakes(){
  if(snowflakelocationselector === 1 || snowflakelocationselector === 200 || snowflakelocationselector > 1 || snowflakelocationselector < 200){
   snowflake = new Snowflake(100,0);
  }

  if(snowflakelocationselector === 201 || snowflakelocationselector === 400 || snowflakelocationselector > 201 || snowflakelocationselector < 400){
    snowflake = new Snowflake(300,0);
   }

   if(snowflakelocationselector === 401 || snowflakelocationselector === 600 || snowflakelocationselector > 401 || snowflakelocationselector < 600){
    snowflake = new Snowflake(500,0);
   }

   if(snowflakelocationselector === 601 || snowflakelocationselector === 800 || snowflakelocationselector > 601 || snowflakelocationselector < 800){
    snowflake = new Snowflake(700,0);
   }

   if(snowflakelocationselector === 801 || snowflakelocationselector === 1000 || snowflakelocationselector > 801 || snowflakelocationselector < 1000){
    snowflake = new Snowflake(900,0);
   }
}